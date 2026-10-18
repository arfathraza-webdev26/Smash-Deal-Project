import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ViewProducts = () => {
  let [products, setProducts] = useState([]);

let navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:4000/products")
      .then(x => setProducts(x.data))
      .catch((err) => alert(err)
      );

  }, []);

  return (
    <>
    <div className='title'><h1>Products</h1></div>
    <div className='viewProducts'>
      
      
      {products.map((x) => {

        return (

          

            <div className="card">
              <img src={x.pimg} alt="" />
              <h3>{x.pname}</h3>
              <h4>{x.pdesc}</h4>
              <h4>{x.pprice}₹</h4>

              <div className="cardbuttons">
                <button onClick={() => {
                    navigate(`/admindashboard/editproducts/${x.id}`);
                    console.log(x.id);
                  }} >EDIT</button>
                <button>DELETE</button>
              </div>

            </div>


           

        )
      }
      )}
    </div>
    </>
  )
}

export default ViewProducts
