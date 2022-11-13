const {Router} = require('express')
const app = Router()
const User = require("../model/Auht.model")
const jwt=require("jsonwebtoken")

app.get("/", async (req, res) => {
    const user=await User.find({})
    res.send(user)
})


app.post("/signup", async (req, res) => {
    const { name, email, phone, password } = req.body
    
    try {
        const user = await User.findOne({email})
        
        if (user) {
            res.send("User alredy exists")
        } else {
            const userdata = await User.create({ name, email, phone, password })
            res.send({status:true,message:"User created succefully", userdata })
        }

    } catch (e) {
        console.log(e.message)
    }

})

app.post("/login", async (req, res) => {
    const { email, password } = req.body
    
    try {
        const user = await User.findOne({ email,password })
        if (!user) {
            res.status(404).send("User not found")
        } else {
            const name=user.name
            const token = jwt.sign({ id: user._id, email:user.email}, "SECRET1234", { expiresIn:"8 hours" });
            res.send({status:true,message:"login success",token,name})
        }
    } catch (err) {
        console.log(err.message)
    }

})



module.exports=app