import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Products from '../pages/Products'
import SingleProduct from '../pages/SingleProduct'
import Home from "../Components/Middlehomepage/Mainhomepage"
import Cart from "../pages/Cart"




function AllRoutes() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>

        <Route path="/:name" element={<Products/>}></Route>
        <Route path="/:name/:id" element={<SingleProduct />}></Route>
        <Route path="/cart" element={<Cart/>}></Route>

         {/* <Route path="*" element={<Pagenotfound/>}></Route> */}
    </Routes>

    </div>
    
    
  )
}

export default AllRoutes