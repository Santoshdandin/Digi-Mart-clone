import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'

import CreateProd from './compontes/create_prod'

import Navabr from './compontes/navbar';
import UpdateProd from './compontes/update_products';
import AllRoutes from './pages/allroutes';
import Home from './pages/home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div >
  <Navabr/>
  <AllRoutes/>
    </div>
  )
}

export default App


