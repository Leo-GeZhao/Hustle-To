const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderDetailSchema = require("../models/orderDetail");

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

module.exports = mongoose.model("Cart", cartSchema);
