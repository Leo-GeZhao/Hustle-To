const express = require("express");
const router = express.Router();

const cartCtrl = require("../../controllers/api/carts");

//Create a Cart and Add Item to Cart
router.post("/addCart", cartCtrl.add);

//Get the Cart
router.post("/getCart", cartCtrl.get);

//Delte Item from the Cart
router.post("/deleteItem", cartCtrl.delete);

//Change Item Quantity from the Cart
router.post("/changeQty", cartCtrl.changeQty);

module.exports = router;
