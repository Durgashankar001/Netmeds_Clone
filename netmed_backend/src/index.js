const express = require('express')
const { default: mongoose } = require('mongoose')
const AuthData = require("../Router/User")
const ProductData = require("../Router/Product")
const CartData=require("../Router/Cart")
const cors =require("cors")

const app = express()
app.use(cors())


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use("/users",AuthData)
app.use("/products", ProductData)
app.use("/carts",CartData)


app.get('/', (req, res) => res.send('hello'))


app.listen(8080, async() => {
    await mongoose.connect("mongodb+srv://metned:metned@cluster0.a4hekjg.mongodb.net/metned")
    console.log('server started on port 8080')
})