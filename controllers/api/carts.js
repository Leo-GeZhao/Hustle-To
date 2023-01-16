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
          image: req.body.image,
        },
      ];

      await cart.save();
      res.status(200).json(cart);
    }
  } catch (err) {
    res.status(400).json(err);
  }
}

async function get(req, res, next) {
  try {
    const cart = await Cart.findOne({ user: req.body.user });
    res.status(200).json(cart);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteOne(req, res, next) {
  try {
    const cart = await Cart.findOneAndUpdate(
      { user: req.body.user },
      { $pull: { orderDetail: { _id: req.body.id } } },
      { new: true }
    );
    res.status(200).json(cart);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function changeQty(req, res, next) {
  try {
    // const cart = await Cart.findOne({ user: req.body.user });
    const updatedCart = await Cart.findOneAndUpdate(
      { user: req.body.user, "orderDetail._id": req.body.id },
      {
        $set: {
          "orderDetail.$.quantity": req.body.quantity,
        },
      }
    );
    console.log(updatedCart);
    // console.log(cart);

    res.status(200).json();
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = { add, get, delete: deleteOne, changeQty };
