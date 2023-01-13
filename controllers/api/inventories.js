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

module.exports = {
  newArrivals,
};
