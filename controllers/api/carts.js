const Cart = require("../../models/carts");

//Update a Cart if exist & Create a Cart if not exist
async function add(req, res, next) {
  try {
    const cart = await Cart.addCart(req);
    res.status(200).json(cart);
  } catch (err) {
    res.status(400).json(err);
  }
}

//Get a Cart
async function get(req, res, next) {
  try {
    const cart = await Cart.getCart(req);
    res.status(200).json(cart);
  } catch (err) {
    res.status(400).json(err);
  }
}

//Delete a Item from cart
async function deleteOne(req, res, next) {
  try {
    const cart = await Cart.deleteItem(req);
    res.status(200).json(cart);
  } catch (err) {
    res.status(400).json(err);
  }
}

//Change Qty of a Item from cart
async function changeQty(req, res, next) {
  try {
    await Cart.changeQty(req);
    res.status(200).json();
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = { add, get, delete: deleteOne, changeQty };
