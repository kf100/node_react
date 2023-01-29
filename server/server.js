const express=require("express");
const app=express();
const cors=require("cors");

app.use(cors());
app.use(express.json());

app.get("/Home",(req,res)=>{
    res.json({message:"Hello From Server"});
})

app.get("/random",(req,res)=>{
    var rand = Math.floor(Math.random() * 100) + 1;
    res.json({number:rand});
})

app.listen(8000,()=> console.log("Listening at 8000"))