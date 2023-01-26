const express = require("express");
const router = express.Router();

const bannerCtrl = require("../../controllers/api/banners");

//Amazon S3 Image
const multer_S3 = require("../../config/multer_S3");

//Add Banner
router.post("/", multer_S3.upload.single("image"), bannerCtrl.create);

//Get All Banners
router.get("/banners", bannerCtrl.index);

//Delete Banner
router.delete("/banners/:id", bannerCtrl.delete);

module.exports = router;
