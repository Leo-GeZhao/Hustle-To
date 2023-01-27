const Cart = require("../../models/carts");

//Stripe Checkout Cart
async function checkout(req, res, next) {
  try {
    const session = await Cart.stripeCheckout(req);
    res.status(200).json({ url: session.url });
  } catch (err) {
    res.status(400).json(err);
  }
}

//Get Order History
async function get(req, res, next) {
  try {
    const orders = await Cart.getOrderHistory(req);
    res.status(200).json(orders);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = { checkout, get };
