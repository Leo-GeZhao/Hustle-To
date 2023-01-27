const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bannerSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      uppercase: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//Create a Banner
bannerSchema.statics.createBanner = async function (req) {
  const banner = await this.create({
    name: req.body.name,
    image: req.file.location,
  });
  return banner;
};

//Get All Banners
bannerSchema.statics.getBanners = async function (req) {
  const banners = await this.find({});
  return banners;
};

//Delete a Banner
bannerSchema.statics.deleteBanner = async function (req) {
  await this.deleteOne({ _id: req.params.id });
  return "Banner Deleted";
};

// async function deleteBanner(req, res) {
//   try {
//     await Banner.deleteOne({ _id: ObjectId(req.params.id) });
//     res.json();
//   } catch (err) {
//     res.status(400).json(err);
//   }
// }

module.exports = mongoose.model("Banner", bannerSchema);
