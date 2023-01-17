const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const Cart = require("../../models/carts");

async function checkout(req, res, next) {
  try {
    const cart = await Cart.updateOne(
      { _id: req.body.cart._id },
      { $set: { isPaid: true } }
    );
    const item = req.body.cart.orderDetail;
    item.map((i) => console.log(i.name));
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: item.map((i) => {
        return {
          price_data: {
            currency: "cad",
            product_data: {
              name: i.name,
            },
            unit_amount: i.price * 100,
          },
          quantity: i.quantity,
        };
      }),
      mode: "payment",
      success_url: `${process.env.STRIPE_URL}/success`,
      cancel_url: `${process.env.STRIPE_URL}/cart`,
    });
    res.status(200).json({ url: session.url });
  } catch (err) {
    res.status(400).json(err);
  }
}

async function get(req, res, next) {
  try {
    const orders = await Cart.find({ user: req.body.user, isPaid: true });
    console.log(orders);
    res.status(200).json(orders);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = { checkout, get };
