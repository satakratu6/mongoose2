const express=require('express');
const mongoose=require("mongoose");
const app=express();
const port=3000;
app.use(express.urlencoded({extended:true}))
mongoose.connect('mongodb://localhost:27017/UserData')
.then(()=>{
    console.log("Database Connection Done");
}).catch(()=>{
    console.log("Something went wrong");
})
const User=require("./model/user");
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("index");
})
app.post("/", async(req,res)=>{
    const data=new User(req.body)
    await data.save();
    res.send("save data");
})
app.listen(port,()=>{
    console.log(`example app listening on port ${port}`);
})