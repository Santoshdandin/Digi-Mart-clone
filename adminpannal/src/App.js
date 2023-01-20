import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'

import CreateProd from './compontes/create_prod'
import Home from './compontes/home';

function App() {
  const [data,setData]=useState();
  const getdata= async()=>{
   let data=await axios.get("https://ruby-antelope-veil.cyclic.app/products?search=samsung");
   
  }
  useEffect(()=>{
getdata()
  },[])

  return (
    <div >
     {/* <CreateProd/> */}

<Home/>
    </div>
  )
}

export default App


