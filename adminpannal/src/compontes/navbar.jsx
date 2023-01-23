import "./navbar.css"
import logo from "../images/logo.jpeg"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Navabr(){
  const navigate=useNavigate()
  const [query,setQuery]=useState("smarttv");
  const [token,setToken]=useState(false)
  const handleSearch=(e)=>{
    let id;
    clearInterval(id)
    id = setInterval(()=>{
      setQuery(e.target.value)
    },2000)
  }
  let T=JSON.parse(localStorage.getItem("Token"))
  useEffect(()=>{
    setToken(T)
  },[T])
    return (
        <div>
  <div className="nav">
    <div className="logo"> <Link to="/home"><img src={logo} alt="" /></Link> </div>
    <div className="search"><input type="text" placeholder="Search your Products...." onInput={(e)=>handleSearch(e)}/></div>
    <div className="user"> {token?<button onClick={()=>{
      localStorage.setItem("Token",JSON.stringify(false));
      navigate("/")
    }}>Logout</button>:<Link to="/"><button>Login</button></Link>}</div>
  </div>
  <div className="navbelo"></div>
  <div className="add">
    <button>Sort Low to High</button>
    <button>Sort High to Low</button> 
  <Link to="/createProduct">

  <button>Create Products</button>
  </Link>
  <test></test>
  </div>

        </div>
    )
}

export default Navabr;