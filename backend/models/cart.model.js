const mongoose=require("mongoose");
const cartSchema=mongoose.Schema({
   name:{type:String,required:true},
   img:{type:String,required:true},
   price:{type:Number,required:true},
   mrp:{type:String,required:true},
   discount:{type:String,required:true},
   brand:{type:String,required:true},
   category:{type:String,required:true},
   qty:{type:Number,required:true},
   userID:{type:String,required:true},
})

const cartModel=mongoose.model("cart",cartSchema);
module.exports={cartModel};