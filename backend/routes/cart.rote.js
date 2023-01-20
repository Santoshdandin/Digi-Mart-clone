const express=require('express');
const cartRouter=express.Router();
const {cartModel}=require("../models/cart.model")

cartRouter.get("/",async (req,res)=>{
    const userid=req.body.userId
    try{
       const data=await cartModel.find({});
       res.send(data)
    }catch(error){
        res.status(409).json({ message : error.message })
    }
})

cartRouter.post("/create",async (req,res)=>{
    const body = req.body;
  
    try{
        const newImage = new cartModel(body)
       await newImage.save();
        res.send({msg:'uploded'})
    }catch(error){
        res.status(409).json({ message : error.message })
    }
})

module.exports={cartRouter}