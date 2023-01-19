const express = require("express");
const productRoute = express.Router();
const { productModel } = require("../models/products.model");



productRoute.get("/", async (req, res) => {
  let sort = req.query.sort;
  let s = req.query.search;
  try {
    if (sort == "asc") {
        const data = await productModel.find({}).sort({ price: 1 });
        res.send({data:data});
    } else if (sort == "desc") {
      const data = await productModel.find({}).sort({ price: -1 });
      res.send({data:data});
    } else if (s) {
      const data = await productModel.find({
        $or: [{ name: { $regex: s } }, { brand: { $regex: s } }, { category: { $regex: s } }],
      });
      res.send({data:data});
    } else {
      const data = await productModel.find({})
      console.log(data.length)
      res.send({data:data});
    }
  } catch (err) {
    res.send("somthing went wrong");
    console.log({err:err});
  }
});
productRoute.get("/:category", async (req, res) => {
  
 const cat=req.params.category;
  try {
   
      const data = await productModel.find({category:cat });
      res.send({data:data});
    
  } catch (err) {
    res.send("somthing went wrong");
    console.log({err:err});
  }
});

productRoute.post("/create", async (req, res) => {
  const payload = req.body;
  
  try {
    const data = new productModel(payload);
    await data.save();
    res.send({msg:"product added"});
  } catch (err) {
    res.send({err:err});
    console.log(err);
  }
});

productRoute.patch("/update/:id", async (req, res) => {
  const payload = req.body;
  const ID = req.params.id;
  try {
    const data = await productModel.findByIdAndUpdate({ _id: ID }, payload);

    res.send({msg:"product updated"});
  } catch (err) {
    res.send({err:err});
    console.log(err);
  }
});

productRoute.delete("/delete/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const data = await productModel.findByIdAndDelete({ _id: ID });

    res.send({msg:`product data deleted with id:${ID}`});
  } catch (err) {
    res.send({msg:"somthing went wrong"});
    console.log(err);
  }
});

module.exports = { productRoute };
