const { mongoose, Schema, model } = require("mongoose");

const CartSchema = new Schema({
  user_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Auth",
    required:true,
  },
  product_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"product",
    required:true,
  },
  title: { type: String, required: true },
  img1: { type: String, required: true },
  actual_price: { type: String, required: true },
  crossed_price: { type: String, required: false },
  manufacturer: { type: String, required: false },
  country: { type: String, required: false },
  category: { type: String, required: false },
  sub_category: { type: String, required: false },
  quantity:{type:Number,default:1}
});

const Cart = model("cart", CartSchema);
module.exports = Cart;
