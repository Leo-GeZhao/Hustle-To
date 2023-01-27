const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderDetailSchema = require("../models/orderDetail");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const cartSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderDetail: [orderDetailSchema],
    isPaid: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

//Update a Cart if exist & Create a Cart if not exist
cartSchema.statics.addCart = async function (req) {
  const customerCart = await this.findOne({
    user: req.body.user,
    isPaid: false,
  });
  if (customerCart) {
    const updatedCart = await this.findOneAndUpdate(
      { user: req.body.user, isPaid: false },
      { $push: { orderDetail: req.body } }
    );
    return updatedCart;
  } else {
    const { brand, name, size, price, image } = req.body;
    const cart = await this.create({
      user: req.body.user,
      " cart.orderDetail": [
        {
          brand: brand,
          name: name,
          size: size,
          price: price,
          image: image,
        },
      ],
    });
    return cart;
  }
};

//Get a Cart
cartSchema.statics.getCart = async function (req) {
  const cart = await this.findOne({ user: req.body.user, isPaid: false });
  return cart;
};

//Delete a Item from cart
cartSchema.statics.deleteItem = async function (req) {
  const cart = await this.findOneAndUpdate(
    { user: req.body.user, isPaid: false },
    { $pull: { orderDetail: { _id: req.body.id } } },
    { new: true }
  );
  return cart;
};

//Change Qty of a Item from cart
cartSchema.statics.changeQty = async function (req) {
  const updatedCart = await this.findOneAndUpdate(
    { user: req.body.user, "orderDetail._id": req.body.id },
    {
      $set: {
        "orderDetail.$.quantity": req.body.quantity,
      },
    }
  );
  return updatedCart;
};

//Stripe Checkout Cart
cartSchema.statics.stripeCheckout = async function (req) {
  await this.updateOne({ _id: req.body.cart._id }, { $set: { isPaid: true } });
  const item = req.body.cart.orderDetail;
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
  return session;
};

//Get Order History
cartSchema.statics.getOrderHistory = async function (req) {
  const orders = await this.find({ user: req.body.user, isPaid: true });
  return orders;
};

module.exports = mongoose.model("Cart", cartSchema);
