const Banner = require("../../models/banner");

//Create a Banner
async function create(req, res, next) {
  try {
    const newBanner = await Banner.createBanner(req);
    res.status(200).json(newBanner);
  } catch (err) {
    res.status(400).json(err);
  }
}

//Get All Banners
async function index(req, res, next) {
  try {
    const banners = await Banner.getBanners(req);
    res.status(200).json(banners);
  } catch (err) {
    res.status(400).json(err);
  }
}

//Delete a Banner
async function deleteBanner(req, res) {
  try {
    await Banner.deleteBanner(req);
    res.status(200).json();
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  create,
  index,
  delete: deleteBanner,
};
