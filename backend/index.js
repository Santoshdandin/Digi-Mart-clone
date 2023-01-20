const express=require("express");
const { connection } = require("./confing/db");
const { productRoute } = require("./routes/products.route");
const cors=require("cors");
const { cartRouter } = require("./routes/cart.rote");
const { authenticate } = require("./middleware/authenticate");

const app=express();

app.use(cors({
    origin:"*"
}));

app.use(express.json({limit: '2mb'}));
app.use(express.urlencoded({limit: '50mb'}));


app.use("/products",productRoute);
app.use(authenticate)
app.use("/cart",cartRouter)



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