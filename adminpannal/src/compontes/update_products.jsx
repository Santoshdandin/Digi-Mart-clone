import "./create_product.css";
import { useState ,useEffect} from "react";
import axios from "axios";
import Pimg from "../images/images.png";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
const url = "https://wandering-plum-parka.cyclic.app/products/create";

function UpdateProd() {
  const{ id}=useParams()
  const [product,setProduct]=useState({});
  const [img, setImg] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [mrp, setMrp] = useState();
  const [discount, setDiscount] = useState();
  const [brand, setBrand] = useState();
  const [category, setCategory] = useState();
  const toast=useToast();
  const [valid,setValid]=useState(localStorage.getItem("Token"))
  const navigate=useNavigate();

  const createPost = async () => {
    const pay = {
      img,
      name,
      price,
      mrp,
      discount,
      brand,
      category,
    };

    try {
      await axios
        .patch(`https://wandering-plum-parka.cyclic.app/products/update/${id}`, pay)
        .then(function (response) {
          console.log(response)
          if(response.data?.msg=="product updated"){

            toast({
              title:"Product Updeted Successfully",
              description:"you can move to Home page",
              status:"success",
              position:"top",
              duration:5000,
              isClosable:true,
            })
          }else{
            toast({
              title:"Filled to Update Product",
              description:"Fill all the required Detail's",
              status:"error",
              position:"top",
              duration:5000,
              isClosable:true,
            })
          }
        })
        .catch(function (error) {
          toast({
            title:"Filled to Update Product",
            description:"Fill all the required Detail's",
            status:"error",
            position:"top",
            duration:5000,
            isClosable:true,
          })
          console.log(error);
        });
    } catch (err) {
      console.log(err);
      console.log({ err: "Somting went wrong" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof postImage);
    createPost();
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await ConvertToBase64(file);
    setImg(base64);
  };

const handleSetProduct=(prod)=>{
console.log(prod)
}

useEffect(()  => {
  if(valid=="true"){

  }else{
    toast({
      title:"Login First !",
      description:"To update Product Login",
      status:"error",
      position:"top",
      duration:5000,
      isClosable:true,
    })
    navigate("/")
  }
  fetch(`https://wandering-plum-parka.cyclic.app/products/${id}`)
  .then(res => res.json())
  .then((res) => {
    setProduct( res[0] )
    setBrand(res[0].brand);
    setCategory(res[0].category);
    setDiscount(res[0].discount);
    setImg(res[0].img);
    setMrp(res[0].mrp);
    setName(res[0].name);
    setPrice(res[0].price)
  })
  .catch(err => console.log(err));
  
},[id])

  return (
    <div className="form_head">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="file-upload" className="custom-file-upload">
          <img src={img ? img : Pimg} alt="product Image" />
        </label>

        <input
          type="file"
          lable="Image"
          name="img"
          id="file-upload"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => handleFileUpload(e)}
        />
        <label htmlFor="">
          Product Name <span>*</span>
        </label>
        <input
          type="string"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name of Product"
        />
        <label htmlFor="">
          Product Price <span>*</span>
        </label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="Price "
        />
        <label htmlFor="">
          Product Mrp <span>*</span>
        </label>
        <input
          type="string"
          name="mrp"
          value={mrp}
          onChange={(e) => setMrp(e.target.value)}
          placeholder="Mrp(₹2999)"
        />
        <label htmlFor="">
          Product Discpunt <span>*</span>
        </label>
        <input
          type="string"
          name="discount"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          placeholder="Discount(15%(₹599))"
        />
        <label htmlFor="">
          Product Braand <span>*</span>
        </label>
        <input
          type="string"
          name="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          placeholder="Brand Name"
        />
        <label htmlFor="">
          Product Category <span>*</span>
        </label>
        <input
          type="string"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UpdateProd;

function ConvertToBase64(file) {
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
