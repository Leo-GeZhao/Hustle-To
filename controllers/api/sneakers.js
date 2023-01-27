const Sneaker = require("../../models/sneaker");

//Create a Sneaker
async function create(req, res, next) {
  try {
    const sneaker = Sneaker.createSneaker(req);
    res.status(200).json(sneaker);
  } catch (err) {
    res.status(400).json(err);
  }
}

//Get All Sneakers
async function index(req, res, next) {
  try {
    const sneakers = await Sneaker.getSneakers();
    res.status(200).json(sneakers);
  } catch (err) {
    res.status(400).json(err);
  }
}

//Get Single Sneaker
async function show(req, res) {
  try {
    const sneaker = await Sneaker.getSneaker(req);
    res.status(200).json(sneaker[0]);
  } catch (err) {
    res.status(400).json(err);
  }
}

//Delete a Sneaker
async function deleteSneaker(req, res) {
  try {
    await Sneaker.deleteSneaker(req);
    res.status(200).json();
  } catch (err) {
    res.status(400).json(err);
  }
}

//Edit a Sneaker
async function edit(req, res) {
  try {
    const sneaker = await Sneaker.updateSneaker(req);
    res.status(200).json(sneaker[0]);
  } catch (err) {
    res.status(400).json(err);
  }
}

//Add Variant(Size&Price) on a Sneaker
async function addVariant(req, res) {
  try {
    const sneaker = await Sneaker.addVariant(req);
    res.status(200).json(sneaker);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  create,
  index,
  show,
  delete: deleteSneaker,
  edit,
  add: addVariant,
};
