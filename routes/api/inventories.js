const express = require("express");
const router = express.Router();
const inventoryCtrl = require("../../controllers/api/inventories");

router.get("/newArrivals", inventoryCtrl.newArrivals);
router.get("/jordan", inventoryCtrl.jordan);
router.get("/yeezy", inventoryCtrl.yeezy);
router.get("/all", inventoryCtrl.index);
router.get("/:sneakerName", inventoryCtrl.show);
router.post("/related", inventoryCtrl.related);

module.exports = router;
