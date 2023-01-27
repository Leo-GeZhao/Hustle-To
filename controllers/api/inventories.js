const Inventory = require("../../models/sneaker");

//Get New Arrivals
async function newArrivals(req, res, next) {
  try {
    const newArrivals = await Inventory.getNewArrivals();
    res.status(200).json(newArrivals);
  } catch (err) {
    res.status(400).json(err);
  }
}

//Get Inventories based on Brand
async function brand(req, res, next) {
  try {
    const brand = await Inventory.getByBrand(req);
    res.status(200).json(brand);
  } catch (err) {
    res.status(400).json(err);
  }
}

//Get All Inventories
async function index(req, res, next) {
  try {
    const inventories = await Inventory.getSneakers();
    res.status(200).json(inventories);
  } catch (err) {
    res.status(400).json(err);
  }
}

//Get Single Inventory
async function show(req, res, next) {
  try {
    const sneaker = await Inventory.getSneaker(req);
    res.status(200).json(sneaker[0]);
  } catch (err) {
    res.status(400).json(err);
  }
}

//Get Related Inventories based on Brand
async function related(req, res, next) {
  try {
    const related = await Inventory.getRelated(req);
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
