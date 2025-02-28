const express = require("express");
const app = express();
const PORT = 8000;
const { connectToMongoDb } =  require("./connection");
const User = require("./models/user");
const cors = require("cors");

app.use(express.json());
app.use(cors());

connectToMongoDb("mongodb://0.0.0.0:27017/user-registration").then(()=>{
    console.log("Connected to MongoDB");
})

app.get("/", async(req, res) =>{
    try{
        const allUsers = await User.find({});
        res.json(allUsers);

    }
    catch(err){
        console.error(err);
        res.status(500).send("Server Error");
    }
})

app.post("/register", async(req,res) =>{
    const body = req.body;
    await User.create({
        username: body.username,
        password: body.password
    })
    res.json({ username: body.username, password: body.password})
})

app.post("/login", (req, res) => {
    const body = req.body;
    User.findOne({username: body.username, password: body.password})
       .then(user => {
            if(!user) return res.status(404).json({message: "User not found"})
            res.json({ message: "Logged in successfully" })
        })
       .catch(err => res.status(500).json({message: "Server Error"}))
})


app.listen(PORT, ()=>{
    console.log(`Server connected to ${PORT}`);
})