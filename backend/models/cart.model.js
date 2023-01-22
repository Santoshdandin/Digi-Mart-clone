const mongoose=require("mongoose");
const cartSchema=mongoose.Schema({
   name:String,
   img:String,
   price:{type:Number,required:true},
   mrp:String,
   discount:String,
   brand:String,
   category:String,
   userID:String,
})

const cartModel=mongoose.model("cart",cartSchema);
module.exports={cartModel};