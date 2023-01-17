const mongoose=require("mongoose");
const productSchema=mongoose.Schema({
    name:String,
    img:String,
    price:String,
    mrp:String,
    discount:String,
    brand:String,
    category:String
})

const productModel=mongoose.model("Products",productSchema);
module.exports={productModel};