const mongoose=require("mongoose");
const productSchema=mongoose.Schema({
    name:{type:String,required:true},
    img:{type:String,required:true},
    price:{type:Number,required:true},
    mrp:{type:String,required:true},
    discount:{type:String,required:true},
    brand:{type:String,required:true},
    category:{type:String,required:true},
})

const productModel=mongoose.model("Products",productSchema);
module.exports={productModel};