const express=require('express');
const cartRouter=express.Router();
const {cartModel}=require("../models/cart.model")
const {UserModel}=require("../models/User.model")
cartRouter.get("/",async (req,res)=>{
    // const userid=req.body.userID
    try{
       const data=await cartModel.find();
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
        res.send({msg:'Data added to the cart'})
    }catch(error){
        res.status(409).json({ message : error.message })
    }
}) 

cartRouter.delete("/delete/:id", async (req, res) => {
  const Id = req.params.id;
  const prod=await cartModel.find({"_id":Id});
  const user_id_in_prod=prod[0].userID;
  const user_making_req=req.body.userID;
  console.log(user_id_in_prod,user_making_req)
  try {
    if(user_id_in_prod!==user_making_req){
      res.send({"msg":"you are not authorised to do this opration"})
    }else{
      await cartModel.findByIdAndDelete({ _id: Id });
      res.send(`Product data deleted with id : ${Id}`);

    }
  } catch (err) {
    res.send("con not delete this items ");
    console.log(err);
  }
  });

module.exports={cartRouter}