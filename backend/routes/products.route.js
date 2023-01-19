const express = require("express");
const productRoute = express.Router();
const { productModel } = require("../models/products.model");
const multer=require("multer");

const upload=multer({
  storage:multer.diskStorage({
      destination:function(req,res,cb){
          cb(null,"uploads")
      },
      filename:function(req,res,cb){
          cb(null,Date.now()+"image.jpg")
      }
  })
}).single("img");



productRoute.get("/", async (req, res) => {
  let sort = req.query.sort;
  let s = req.query.search;
  try {
    if (sort == "asc") {
        const data = await productModel.find({}).sort({ price: 1 });
        res.send(data);
    } else if (sort == "desc") {
      const data = await productModel.find({}).sort({ price: -1 });
      res.send(data);
    } else if (s) {
      const data = await productModel.find({
        $or: [{ name: { $regex: s } }, { brand: { $regex: s } }, { category: { $regex: s } }],
      });
      res.send(data);
    } else {
      const data = await productModel.find({})
      console.log(data.length)
      res.send(data);
    }
  } catch (err) {
    res.send("somthing went wrong");
    console.log(err);
  }
});
productRoute.get("/:category", async (req, res) => {
  
 const cat=req.params.category;
  try {
   
      const data = await productModel.find({category:cat });
      res.send(data);
    
  } catch (err) {
    res.send("somthing went wrong");
    console.log(err);
  }
});

productRoute.post("/create",upload, async (req, res) => {
  const payload = req.body;
  try {
    // const data = new productModel(payload);
    // await data.save();
   console.log(payload,req.file)
    // const data= await productModel.insertMany(payload);
    

    res.send("product data added");
  } catch (err) {
    res.send("somthing went wrong");
    console.log(err);
  }
});

productRoute.patch("/update/:id", async (req, res) => {
  const payload = req.body;
  const ID = req.params.id;
  try {
    const data = await productModel.findByIdAndUpdate({ _id: ID }, payload);

    res.send("product data updated");
  } catch (err) {
    res.send("somthing went wrong");
    console.log(err);
  }
});

productRoute.delete("/delete/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const data = await productModel.findByIdAndDelete({ _id: ID });

    res.send(`product data deleted with id:${ID}`);
  } catch (err) {
    res.send("somthing went wrong");
    console.log(err);
  }
});

module.exports = { productRoute };
