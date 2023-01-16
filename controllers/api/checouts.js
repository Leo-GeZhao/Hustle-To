const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

async function checkout(req, res, next) {
  try {
    const item = req.body.orderDetail;
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
      success_url: "http://localhost:3000",
      cancel_url: "http://localhost:3000/cart",
    });
    console.log(session.url);
    res.status(200).json({ url: session.url });
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = { checkout };
