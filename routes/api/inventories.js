const express = require("express");
const router = express.Router();
const inventoryCtrl = require("../../controllers/api/inventories");

router.get("/newArrivals", inventoryCtrl.newArrivals);

module.exports = router;
