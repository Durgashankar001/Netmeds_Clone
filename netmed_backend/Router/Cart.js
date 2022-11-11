const {Router} = require('express')
const app = Router()
const Cart = require("../model/Cart.model")


app.get("/", async (req, res) => {
    const cart=await Cart.find({})
    res.send(cart)
})

app.post("/", async (req, res) => { 
    const { title, img1, actual_price, crossed_price } = req.body;
    try {
        let cartData = await Cart.create({ title, img1, actual_price, crossed_price })
        res.send(cartData)

    } catch (err) {
        console.log(err.message)
    }

})


app.delete("/", async (req, res) => {
    const { id } = req.params
    try {
        let remove = await Cart.deleteOne({ _id: id })
        res.send("Item Remove sucessfully")
        
    } catch (err) {
        res.send(err.message)
    }
})

app.patch("/:id",async(req, res) => {
    let { id } = req.params
    try {
        let newdata = await Todo.replaceOne({_id:id })
        res.send(newdata)
    } catch (err) {
        res.status(401).send("Wrong id")
    }
    
})


module.exports=app