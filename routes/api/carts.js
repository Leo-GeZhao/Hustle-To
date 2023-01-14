const express = require("express");
const router = express.Router();
const cartCtrl = require("../../controllers/api/carts");

router.post("/addCart", cartCtrl.add);
router.post("/getCart", cartCtrl.get);

module.exports = router;
