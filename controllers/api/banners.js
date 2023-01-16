const Banner = require("../../models/banner");
const ObjectId = require("mongodb").ObjectId;

async function create(req, res) {
  try {
    const newBanner = new Banner(req.body);
    newBanner.image = req.file.location;
    await newBanner.save();
    res.json(newBanner);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function index(req, res) {
  try {
    const banners = await Banner.find({});
    res.json(banners);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteBanner(req, res) {
  try {
    await Banner.deleteOne({ _id: ObjectId(req.params.id) });
    res.json();
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  create,
  index,
  delete: deleteBanner,
};
