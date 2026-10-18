import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from "react-toastify"


const EditProducts = () => {
    let [products, setProducts] = useState({
        pname: "", pdesc: "", pprice: "", pqty: "", pimg: ""
    })
    let { id } = useParams();


    useEffect(
        () => {
            const getProducts = async () => {
                try {
                    let res = await axios.get(`http://localhost:4000/products/${id}`)
                    setProducts(res.data);
                }
                catch (error) {
                    toast.error(error);
                }

            }
            getProducts();

        }, [id]
    )


    let handleChange = (e) => {
        let { name, value } = e.target;

        setProducts({ ...products, [name]: value })
    }

    let handleEdit = async (e) => {
        e.preventDefault();
        try {
            let payload = products;
            let res = await axios.put(`http://localhost:4000/products/${id}`,payload);
            setProducts(res.data)
            toast.success("product details updated Successfully!!!");


        }
        catch(error){
            toast.error("Failed to Update products")
        }
        
        
    }


    return (
        <div>

             <div className="add-prod-form">
    <form action="" onSubmit={handleEdit}>
        <label htmlFor="pname">Product Name:</label>
        <input type="text" id="pname" name='pname' onChange={handleChange} required value={products.pname} /><br /><br />

         <label htmlFor="pdesc">Product Description:</label>
        <input type="text" id="pdesc" name='pdesc' onChange={handleChange} required value={products.pdesc} /><br /><br />

         <label htmlFor="pprice">Product Price:</label>
        <input type="number" id="pprice" name='pprice' onChange={handleChange} required value={products.pprice} /><br /><br />

         <label htmlFor="pqty">Product Quantity:</label>
        <input type="text" id="pqty" name='pqty' onChange={handleChange} required value={products.pqty} /><br /><br />

         <label htmlFor="pimg">Product Image url:</label>
        <input type="url" id="pimg" name='pimg' onChange={handleChange} required value={products.pimg} /><br /><br />

        <button >UPDATE PRODUCT</button> <button>CANCEL</button>
        </form>

    </div>

        </div>
    )
}

export default EditProducts
