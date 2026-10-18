import React, {useState,useEffect} from 'react'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom';
import {ToastContainer,toast} from "react-toastify";

const AddProducts = () => {
    let [products, setProducts]= useState({});
    // let navigate = useNavigate();

    let handlechange = (e)=>{
        setProducts({...products, [e.target.name] : e.target.value});
    }

    let handlesubmit = (e) =>{
      e.preventDefault();
         
        let payload = products;
        axios.post("http://localhost:4000/products",payload);
        toast.success(`${products.pqty} products added successfully`);
         

    }


  return (
    <div className='AddProducts'>
      <h1>Add Products</h1>
    
    <div className="add-prod-form">
    <form action="" onSubmit={handlesubmit}>
        <label htmlFor="pname">Product Name:</label>
        <input type="text" id="pname" name='pname' onChange={handlechange} required /><br /><br />

         <label htmlFor="pdesc">Product Description:</label>
        <input type="text" id="pdesc" name='pdesc' onChange={handlechange} required /><br /><br />

         <label htmlFor="pprice">Product Price:</label>
        <input type="number" id="pprice" name='pprice' onChange={handlechange} required /><br /><br />

         <label htmlFor="pqty">Product Quantity:</label>
        <input type="text" id="pqty" name='pqty' onChange={handlechange} required /><br /><br />

         <label htmlFor="pimg">Product Image url:</label>
        <input type="url" id="pimg" name='pimg' onChange={handlechange} required /><br /><br />

        <button>Add Product</button> <button>CANCEL</button>
        </form>

    </div>

    </div>
  )
}

export default AddProducts
