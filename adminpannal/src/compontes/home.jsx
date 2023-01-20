import axios from "axios";
import { useEffect, useState } from "react";
import "./home.css";
function Home() {
  const [data, setData] = useState();

  const getdata = async () => {
    let Data = await axios.get(
      `https://ruby-antelope-veil.cyclic.app/products`
    );
   
    setData(Data.data.data);
    
  };

  const handelSearch=async(e)=>{
const value=e.target.value;
let data=await axios.get(`https://ruby-antelope-veil.cyclic.app/products?search=${value}`)
setData(data.data.data)
  }
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <div className="nav">
        <input type="text" placeholder="search" onChange={(e)=>handelSearch(e)}/>
        <button >Low to High</button>
        <button>High to low</button>
      </div>
      <div className="prod">
        {data?.map((el) => {
          return (
            <div key={el._id}>
              <img src={el.img} alt="" />
              <h4>{el.name}</h4>
              <p>{el.price}</p>
              <button>Update</button>
              <button>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Home;
