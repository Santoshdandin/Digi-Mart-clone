import axios from "axios";
import { useEffect, useState } from "react";
import "./home.css";
function Home() {
  const [data, setData] = useState();
  const [page , setPage]=useState(1)
  const [limit , setLimit]=useState(20)

  const getdata = async () => {
    let Data = await axios.get(
      `https://lime-confused-shrimp.cyclic.app/products?_search=smarttv&_page=${page}&_limit=${limit}`
    );
   
    setData(Data.data.data);
    
  };

 
  useEffect(() => {
    getdata();
  }, [page]);

  return (
    <div>
    
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
      <div className="pagination"><button onClick={()=>setPage(prev => prev-1)} disabled={page===1}>Prev</button>{page}<button onClick={()=>setPage(next => next+1)} disabled={data.length==0}>Next</button></div>
    </div>
  );
}
export default Home;
