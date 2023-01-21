import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Products from '../pages/Products'




function AllRoutes() {
  return (
    <div>
        <Routes>
        
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
       
        {/* <Route path="*" element={<Pagenotfound/>}></Route> */}
    </Routes>

    </div>
    
    
  )
}

export default AllRoutes