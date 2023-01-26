const express = require("express");
const router = express.Router();

const inventoryCtrl = require("../../controllers/api/inventories");

//Get All New Arrivals
router.get("/newArrivals", inventoryCtrl.newArrivals);

//Get All Inventories
router.get("/all", inventoryCtrl.index);

//Get All based on Brand
router.post("/brand", inventoryCtrl.brand);

//Get Single Inventory
router.get("/:sneakerName", inventoryCtrl.show);

//Get All related based on Brand
router.post("/related", inventoryCtrl.related);

module.exports = router;
