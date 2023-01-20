import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'

import CreateProd from './compontes/create_prod'

import Navabr from './compontes/navbar';
import Home from './pages/home';

function App() {
  return (
    <div >
     {/* <CreateProd/> */}
  <Navabr/>
<Home/>
    </div>
  )
}

export default App


