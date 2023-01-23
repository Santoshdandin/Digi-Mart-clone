import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/home";
import Signup from "../pages/Signup";
import UpdateProd from "../compontes/update_products";
import CreateProd from "../compontes/create_prod";
import { useEffect, useState } from "react";
import Pagenotfound from "../compontes/PagenotFound";
function AllRoutes() {
 
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/update/:id" element={<UpdateProd />}></Route>
        <Route path="/createProduct" element={<CreateProd />}></Route>

        <Route path="*" element={<Pagenotfound/>}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
