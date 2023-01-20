const mongoose=require("mongoose");
const cartSchema=mongoose.Schema({
   img:String,
   name:String,
   price:Number,
   category:String,
   userId:String,
})

const cartModel=mongoose.model("cart",cartSchema);
module.exports={cartModel};