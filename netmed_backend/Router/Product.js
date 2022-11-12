const { Router } = require("express");
const app = Router();
const User = require("../model/Product.model");

app.get("/", async (req, res) => {
    const{page=1,limit=16,orderBy="id",order="asc"}=req.query
  const user = await User.find({})
  .sort({[orderBy]:order==="asc"?1:-1})
  .skip((page-1)*limit)
  .limit(limit)
  res.send(user);
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ _id: id });
  res.send(user);
});

module.exports = app;
