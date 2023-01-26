const express = require("express");
const router = express.Router();

const checkoutCtrl = require("../../controllers/api/checouts");

//Stript Checkout
router.post("/create-checkout-session", checkoutCtrl.checkout);

//Get Order History
router.post("/orders", checkoutCtrl.get);

module.exports = router;
