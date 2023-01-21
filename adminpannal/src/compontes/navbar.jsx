import "./navbar.css"
import logo from "../images/logo.jpeg"
import { useState } from "react"
function Navabr(){
  const [query,setQuery]=useState("smarttv");
  const handleSearch=(e)=>{
    let id;
    clearInterval(id)
    id = setInterval(()=>{
      setQuery(e.target.value)
    },2000)
  }
    return (
        <div>
  <div className="nav">
    <div className="logo"><img src={logo} alt="" /></div>
    <div className="search"><input type="text" placeholder="Search your Products...." onInput={(e)=>handleSearch(e)}/></div>
    <div className="user"><button>Signup</button><button>Login</button></div>
  </div>
  <div className="navbelo"></div>
  <div className="add"> 
  <button>Create Products</button>
  <test></test>
  </div>

        </div>
    )
}

export default Navabr;