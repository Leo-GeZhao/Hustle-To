const Cart = require("../../models/carts");

async function add(req, res, next) {
  try {
    const customerCart = await Cart.findOne({ user: req.body.user });
    if (customerCart) {
      const updatedCart = await Cart.findOneAndUpdate(
        { user: req.body.user },
        { $push: { orderDetail: req.body } }
      );
      await updatedCart.save();
      res.status(200).json(updatedCart);
    } else {
      const cart = await new Cart({ user: req.body.user });
      cart.orderDetail = [
        {
          brand: req.body.brand,
          name: req.body.name,
          size: req.body.size,
          price: req.body.price,
        },
      ];

      await cart.save();
      res.status(200).json(cart);
    }
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = { add };
