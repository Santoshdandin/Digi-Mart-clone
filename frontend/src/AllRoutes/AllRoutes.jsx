import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Products from '../pages/Products'
import SingleProduct from '../pages/SingleProduct'




function AllRoutes() {
  return (
    <div>
        <Routes>
        
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/:name" element={<Products/>}></Route>
        <Route path="/:name/:id" element={<SingleProduct />}></Route>
        {/* <Route path="*" element={<Pagenotfound/>}></Route> */}
    </Routes>

    </div>
    
    
  )
}

export default AllRoutes