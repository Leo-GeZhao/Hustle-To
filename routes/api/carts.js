const express = require("express");
const router = express.Router();
const cartCtrl = require("../../controllers/api/carts");

router.post("/addCart", cartCtrl.add);
router.post("/getCart", cartCtrl.get);
router.post("/deleteItem", cartCtrl.delete);
router.post("/changeQty", cartCtrl.changeQty);

module.exports = router;
