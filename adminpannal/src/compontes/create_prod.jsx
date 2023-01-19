import { useState } from "react";
import axios from "axios";
const url = "http://localhost:4001/products/create";

function CreateProd() {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [mrp, setMrp] = useState("");
  const [discount, setDiscount] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");

  const createPost = async () => {
    const pay = {
      img,
      name,price,mrp,discount,brand,category
    };
  
    try {
     const data= await axios.post(url, pay);
     console.log(data.data.message)
    } catch (err) {
      console.log(err);
      console.log({err:"Somting went wrong"})
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof postImage);
    createPost();
  
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImg(base64);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="file-upload" className="custom-file-upload">
          <img src={img} alt="product" />
        </label>

        <input
          type="file"
          lable="Image"
          name="img"
          id="file-upload"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => handleFileUpload(e)}
        />
        <input type="string" name="name" onChange={(e)=>setName(e.target.value)} placeholder="Name of Product"/>
        <input type="number" name="price"  onChange={(e)=>setPrice(Number(e.target.value))} placeholder="Price "/>
        <input type="string" name="mrp"  onChange={(e)=>setMrp(e.target.value)} placeholder="Mrp(₹2999)"/>
        <input type="string" name="discount"  onChange={(e)=>setDiscount(e.target.value)} placeholder="Discount(15%(599))"/>
        <input type="string" name="brand"  onChange={(e)=>setBrand(e.target.value)} placeholder="Brand Name"/>
        <input type="string" name="category"  onChange={(e)=>setCategory(e.target.value)} placeholder="Category"/>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateProd;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
