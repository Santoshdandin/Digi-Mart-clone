const express=require("express");
const { connection } = require("./confing/db");
const { productRoute } = require("./routes/products.route");
const app=express();

app.use(express.json())

app.use("/products",productRoute)




app.listen(4001,async()=>{
try{
    await connection;
    console.log("Databse connected")

}catch(err){
console.log("somthing went wrong");
console.log(err)
}
console.log(`server is running on port ${4001}`)
})