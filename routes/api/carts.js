const express = require("express");
const router = express.Router();
const cartCtrl = require("../../controllers/api/carts");

router.post("/addCart", cartCtrl.add);

module.exports = router;
