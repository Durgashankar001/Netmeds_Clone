const { mongoose, Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  img1: { type: String, required: true },
  actual_price: { type: String, required: true },
  crossed_price: { type: String, required: true },
  manufacturer: { type: String, required: true },
  country: { type: String, required: true },
  category: { type: String, required: true },
  sub_category: { type: String, required: true }
});

const Product = model("product", ProductSchema);
module.exports = Product;
