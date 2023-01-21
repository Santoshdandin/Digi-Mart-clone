const express = require("express");
const productRoute = express.Router();
const { productModel } = require("../models/products.model");

productRoute.get("/", async (req, res) => {
  let sort = req.query._sort;
  let page = req.query._page||1;
  let limit = req.query._limit||0;
  let s = req.query._search;
  try {
    if (s) {
     
      if (sort == "asc") {
        let data = await productModel
          .find({
            $or: [
              { name: { $regex: s } },
              { brand: { $regex: s } },
              { category: { $regex: s } },
            ],
          }).skip(limit*(page-1)).limit(limit)
          .sort({ price: 1 });
         
          res.send(data);
          return ;
      } 
      else if (sort == "desc") {
        let data = await productModel
          .find({
            $or: [
              { name: { $regex: s } },
              { brand: { $regex: s } },
              { category: { $regex: s } },
            ],
          }).skip(limit*(page-1)).limit(limit)
          .sort({ price: -1 });
        
          res.send(data);
          return ;
      }
      else{
        const data = await productModel.find({
          $or: [
            { name: { $regex: s } },
            { brand: { $regex: s } },
            { category: { $regex: s } },
          ],
        }).skip(limit*(page-1)).limit(limit);
        res.send({ data: data });
      }
    } 
    else if (sort == "asc") {
      const data = await productModel.find({}).skip(limit*(page-1)).limit(limit).sort({ price: 1 });
      console.log(data.length)
      res.send({ data: data });
    } 
    else if (sort == "desc") {
      const data = await productModel.find({}).skip(limit*(page-1)).limit(limit).sort({ price: -1 });
      console.log(data.length)
      res.send({ data: data });
    } 
    else {
      
      const data = await productModel.find({}).skip(limit*(page-1)).limit(limit);
     
      res.send({ data: data });
    }
  } catch (err) {
    res.send("somthing went wrong");
    console.log({ err: err });
  }
});
productRoute.get("/:ID", async (req, res) => {
 const id=req.params.ID
  try {
      const data = await productModel.find({_id:id})
     
      res.send({ data: data });
    
  } catch (err) {
    res.send("somthing went wrong");
    console.log({ err: err });
  }
});

productRoute.get("/category/:category", async (req, res) => {
  const cat = req.params.category;
  let sort = req.query._sort;
  let page = req.query._page||1;
  let limit = req.query._limit||0;
  try {
    if(sort=="asc"){
      const data = await productModel.find({ category: cat }).skip(limit*(page-1)).limit(limit)
      .sort({ price: 1 });
      res.send({ data: data });
    }else if(sort=="desc"){
      const data = await productModel.find({ category: cat }).skip(limit*(page-1)).limit(limit)
      .sort({ price: -1 });
      res.send({ data: data });
    }
    else{
      const data = await productModel.find({ category: cat }).skip(limit*(page-1)).limit(limit);
    res.send({ data: data });
    }
    
  } catch (err) {
    res.send("somthing went wrong");
    console.log({ err: err });
  }
});

productRoute.post("/create", async (req, res) => {
  const payload = req.body;

  try {
    const data = new productModel(payload);
    await data.save();
    res.send({ msg: "product added" });
  } catch (err) {
    res.send({ err: err });
    console.log(err);
  }
});

productRoute.patch("/update/:id", async (req, res) => {
  const payload = req.body;
  const ID = req.params.id;
  try {
    const data = await productModel.findByIdAndUpdate({ _id: ID }, payload);

    res.send({ msg: "product updated" });
  } catch (err) {
    res.send({ err: err });
    console.log(err);
  }
});

productRoute.delete("/delete/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const data = await productModel.findByIdAndDelete({ _id: ID });

    res.send({ msg: `product data deleted with id:${ID}` });
  } catch (err) {
    res.send({ msg: "somthing went wrong" });
    console.log(err);
  }
});

module.exports = { productRoute };
