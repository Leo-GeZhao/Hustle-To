const express = require("express");
const router = express.Router();
const checkoutCtrl = require("../../controllers/api/checouts");

router.post("/create-checkout-session", checkoutCtrl.checkout);

module.exports = router;
