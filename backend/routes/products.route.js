const express=require("express");
const productRoute=express.Router();
const {productModel}=require("../models/products.model")
productRoute.get("/",async(req,res)=>{
    let sort=req.query.sort;
    console.log(s)
    try{
        if(sort=="asc"){
            const data= await productModel.find({}).sort({"name":1})
            res.send(data)
        }else if(sort=="desc"){
            const data= await productModel.find({}).sort({"name":-1})
            res.send(data)
        }
        else{
            const data= await productModel.find({}).sort({"name":1})
            res.send(data)
        }
      

    }catch(err){
        res.send("somthing went wrong");
        console.log(err);
    }
    
})

productRoute.post("/create",async(req,res)=>{
    const payload=req.body;
    try{
       const data=new productModel(payload);
       await data.save();
       res.send("product data added")

    }catch(err){
        res.send("somthing went wrong");
        console.log(err);
    }
    
})

productRoute.patch("/update/:id",async(req,res)=>{
    const payload=req.body;
    const ID=req.params.id;
    try{
       const data=await productModel.findByIdAndUpdate({_id:ID},payload);
       
       res.send("product data updated")

    }catch(err){
        res.send("somthing went wrong");
        console.log(err);
    }
    
})

productRoute.delete("/delete/:id",async(req,res)=>{
  
    const ID=req.params.id;
    try{
       const data=await productModel.findByIdAndDelete({_id:ID});
       
       res.send(`product data deleted with id:${ID}`)

    }catch(err){
        res.send("somthing went wrong");
        console.log(err);
    }
    
})

module.exports={productRoute}