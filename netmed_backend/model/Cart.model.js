const { mongoose, Schema, model } = require("mongoose");

const CartSchema = new Schema({
  title: { type: String, required: true },
  img1: { type: String, required: true },
  actual_price: { type: String, required: true },
  crossed_price: { type: String, required: true },
  manufacturer: { type: String, required: true },
  country: { type: String, required: true },
  category: { type: String, required: true },
  sub_category: { type: String, required: true }
});

const Cart = model("product", CartSchema);
module.exports = Cart;
