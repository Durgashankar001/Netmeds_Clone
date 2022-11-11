const {Router} = require('express')
const app = Router()
const User = require("../model/Product.model")


app.get("/", async (req, res) => {
    const user=await User.find({})
    res.send(user)
})


module.exports=app