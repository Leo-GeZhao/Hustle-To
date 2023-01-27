const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const variantSchema = require("./variantSchema");

const sneakerSchema = new Schema(
  {
    brand: {
      type: String,
      uppercase: true,
      required: true,
    },
    name: {
      type: String,
      uppercase: true,
      required: true,
    },
    variant: [variantSchema],
    description: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//Create a Sneaker (Admin)
sneakerSchema.statics.createSneaker = async function (req) {
  const { brand, name, description } = req.body;
  const sneaker = await this.create({
    name: name,
    brand: brand,
    description: description,
    image: req.file.location,
  });
  return sneaker;
};

//Get All Sneakers (Admin) & Get All Inventories (Customer)
sneakerSchema.statics.getSneakers = async function () {
  const sneakers = await this.find({});
  return sneakers;
};

//Get Single Sneaker based on Sneaker Name (Admin) & Get Single Inventory based on Sneaker Name (Cusomter)
sneakerSchema.statics.getSneaker = async function (req) {
  const sneaker = await this.find({ name: req.params.sneakerName });
  return sneaker;
};

//Delete a Sneaker (Admin)
sneakerSchema.statics.deleteSneaker = async function (req) {
  await this.deleteOne({ name: req.params.sneakerName });
  return "Sneaker Deleted";
};

//Update Sneaker Description (Admin)
sneakerSchema.statics.updateSneaker = async function (req) {
  const sneaker = await this.updateOne(
    { name: req.params.sneakerName },
    req.body
  );
  return sneaker;
};

//Add Variant(Size&Price) on a Single Sneaker (Admin)
sneakerSchema.statics.addVariant = async function (req) {
  const sneaker = await this.findOneAndUpdate(
    { name: req.params.sneakerName },
    { $push: { variant: req.body } }
  );
  return sneaker;
};

//Get NewArrivals (Customer)
sneakerSchema.statics.getNewArrivals = async function () {
  const newArrivals = await this.find({}).sort("-createdAt").limit(6);
  return newArrivals;
};

//Get Inventories based on Brand (Cusomter)
sneakerSchema.statics.getByBrand = async function (req) {
  const brand =
    req.body.brand === "NEW-ARRIVALS"
      ? await this.find({}).sort("-createdAt").limit(12)
      : req.body.brand === "ALL"
      ? await this.find({})
      : await this.find({ brand: req.body.brand }).sort("-createdAt");
  return brand;
};

//Get Related Inventories based on Brand (Customer)
sneakerSchema.statics.getRelated = async function (req) {
  const related = await this.find({ brand: req.body.brand })
    .where("name")
    .ne(req.body.name)
    .limit(5);
  return related;
};

module.exports = mongoose.model("Sneaker", sneakerSchema);
