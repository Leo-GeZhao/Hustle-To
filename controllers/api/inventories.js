const Inventory = require("../../models/sneaker");
// const Sneaker = require("../../models/sneaker");

async function newArrivals(req, res, next) {
  try {
    const newArrivals = await Inventory.find({}).sort("-createdAt").limit(10);
    res.status(200).json(newArrivals);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function jordan(req, res, next) {
  try {
    const jordan = await Inventory.find({ brand: "jordan" }).sort("-createdAt");
    res.status(200).json(jordan);
  } catch (err) {
    res.status(400).json(err);
  }
}
async function yeezy(req, res, next) {
  try {
    const yeezy = await Inventory.find({ brand: "yeezy" }).sort("-createdAt");
    res.status(200).json(yeezy);
  } catch (err) {
    res.status(400).json(err);
  }
}
async function all(req, res, next) {
  try {
    const all = await Inventory.find({});
    res.status(200).json(all);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  newArrivals,
  jordan,
  yeezy,
  all,
};
