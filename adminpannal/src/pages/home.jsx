import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./home.css";
import Getdata from "../functions/getProduct";
import { useToast } from "@chakra-ui/react";

function Home() {
  const toast=useToast()
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  
  const [limit, setLimit] = useState(20);
  const [valid,setValid]=useState(localStorage.getItem("Token"))
  const navigate=useNavigate();
  
  const handleData=()=>{
    Getdata({page,limit}).then((res)=>{
      setData(res.data)
      
    }).catch((err)=>{
      console.log(err)
    })
    }

  const handleDelete= async (id)=>{
   await axios.delete(
      `https://wandering-plum-parka.cyclic.app/products/delete/${id}`
    ) .then(function (response) {
     handleData()
      toast({
        title:"Product Deleted",
        description:"seccessfull",
        status:"success",
        position:"top",
        duration:5000,
        isClosable:true,
      })
    })
    .catch(function (error) {
      toast({
        title:"Filled to Delete Product",
        description:"Fill all the required Detail's",
        status:"error",
        position:"top",
        duration:5000,
        isClosable:true,
      })
      console.log(error);
    });
  }

  useEffect(() => {
    if(valid=="true"){
      
    }else{
      toast({
        title:"Login First !",
        description:"To see home page Login",
        status:"error",
        position:"top",
        duration:5000,
        isClosable:true,
      })
      navigate("/")
    }
    
   handleData()

  }, [page]);

  return (
    <div className="parent">
      <div className="prod">
        {data&&data?.map((el) => {
          return (
            <div key={el._id} className="single_prod">
              <img src={el.img} alt="" />
              <h4 >{el.name}</h4>
              <p><span>Brand: </span>{el.brand}</p>
              <p><span>Category: </span>{el.category}</p>
              <p>₹{el.mrp}</p>
              <h5>₹{el.price}</h5>
              <div>
              <button > <Link to={`/update/${el._id}`}>Update</Link></button>
              
              <button onClick={()=>handleDelete(el._id)} >Delete</button>

              </div>
            </div>
          );
        })}
      </div>
      <div className="pagination">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
        >
          Prev
        </button>
        <button>{page}</button>
        <button
          onClick={() => setPage((next) => next + 1)}
          disabled={data.length === 0}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default Home;
