import axios from "axios";
import { useEffect, useState } from "react";
import "./home.css";
function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);

  const getdata = async () => {
   await axios.get(
      `https://wandering-plum-parka.cyclic.app/products?_search=&_page=${page}&_limit=${limit}`
    ) .then(function (response) {
      setData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    
    
  };

  useEffect(() => {
    getdata();
  }, [page]);

  return (
    <div>
      <div className="prod">
        {data?.map((el) => {
          return (
            <div key={el._id} className="single_prod">
              <img src={el.img} alt="" />
              <h4 >{el.name}</h4>
              <p><span>Brand: </span>{el.brand}</p>
              <p><span>Category: </span>{el.category}</p>
              <p>₹{el.mrp}</p>
              <h5>₹{el.price}</h5>
              <div>
              <button >Update</button>
              <button>Delete</button>

              </div>
            </div>
          );
        })}
      </div>
      <div className="pagination">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
        >
          Prev
        </button>
        <button>{page}</button>
        <button
          onClick={() => setPage((next) => next + 1)}
          disabled={data.length === 0}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default Home;
