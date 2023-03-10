import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Products from '../pages/Products'
import SingleProduct from '../pages/SingleProduct'
import Home from "../Components/Middlehomepage/Mainhomepage"
import Cart from "../pages/Cart"
import Pagenotfound from "../pages/PagenotFound"
import Checkout from '../pages/Checkout'
import Payment from '../pages/Payment'




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
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>

         <Route path="*" element={<Pagenotfound/>}></Route>
    </Routes>

    </div>
    
    
  )
}

export default AllRoutes