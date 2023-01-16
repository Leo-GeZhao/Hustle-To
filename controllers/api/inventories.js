const Inventory = require("../../models/sneaker");

async function newArrivals(req, res, next) {
  try {
    const newArrivals = await Inventory.find({}).sort("-createdAt").limit(6);
    res.status(200).json(newArrivals);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function brand(req, res, next) {
  try {
    if (req.body.brand === "NEW-ARRIVALS") {
      const brand = await Inventory.find({}).sort("-createdAt").limit(12);
      res.status(200).json(brand);
    } else if (req.body.brand === "ALL") {
      const brand = await Inventory.find({});
      res.status(200).json(brand);
    } else {
      const brand = await Inventory.find({ brand: req.body.brand }).sort(
        "-createdAt"
      );
      res.status(200).json(brand);
    }
  } catch (err) {
    res.status(400).json(err);
  }
}

async function index(req, res, next) {
  try {
    const all = await Inventory.find({});
    res.status(200).json(all);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function show(req, res, next) {
  try {
    const sneaker = await Inventory.find({ name: req.params.sneakerName });
    res.status(200).json(sneaker[0]);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function related(req, res, next) {
  try {
    const related = await Inventory.find({ brand: req.body.brand })
      .where("name")
      .ne(req.body.name)
      .limit(5);
    res.status(200).json(related);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  newArrivals,
  brand,
  index,
  show,
  related,
};
