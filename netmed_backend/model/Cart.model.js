const { mongoose, Schema, model } = require("mongoose");

const CartSchema = new Schema({
  user_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Auth",
    required:true,
  },
  title: { type: String, required: true },
  img1: { type: String, required: true },
  actual_price: { type: String, required: true },
  crossed_price: { type: String, required: false },
  manufacturer: { type: String, required: false },
  country: { type: String, required: false },
  category: { type: String, required: false },
  sub_category: { type: String, required: false }
});

const Cart = model("cart", CartSchema);
module.exports = Cart;
