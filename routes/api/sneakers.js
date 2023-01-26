const express = require("express");
const router = express.Router();

const sneakersCtrl = require("../../controllers/api/sneakers");

//Amazon S3 Image
const multer_S3 = require("../../config/multer_S3");

//Create a Sneaker
router.post("/", multer_S3.upload.single("image"), sneakersCtrl.create);

//Get All Sneakers
router.get("/sneakers", sneakersCtrl.index);

//Get Single Sneaker based on Sneaker Name
router.get("/sneakers/:sneakerName", sneakersCtrl.show);

//Delete Single Sneakr based on Sneaker Name
router.delete("/sneakers/:sneakerName", sneakersCtrl.delete);

//Edit Sneaker Detail based on Sneaker Name
router.put("/sneakers/:sneakerName", sneakersCtrl.edit);

//Add Variant (Size&Price) to a Single Sneaker
router.post("/sneakers/:sneakerName/variant", sneakersCtrl.add);

module.exports = router;
