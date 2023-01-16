const express = require("express");
const router = express.Router();
const checkoutCtrl = require("../../controllers/api/checouts");

router.post("/create-checkout-session", checkoutCtrl.checkout);
router.post("/orders", checkoutCtrl.get);

module.exports = router;
