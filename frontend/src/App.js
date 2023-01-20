
import './App.css';
import Footer from './Components/Pages/Footer';
import Navbar from './Components/navbar/Navbar';
import AllRoutes from './AllRoutes/AllRoutes';
import Mainhomepage from './Components/Middlehomepage/Mainhomepage';


function App() {
  return (
    <div>
   <Navbar/>
   <Mainhomepage/>
   <AllRoutes/>
<Footer/>
    
    </div>
  );
}

export default App;
