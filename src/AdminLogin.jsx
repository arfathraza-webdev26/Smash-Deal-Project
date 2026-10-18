import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";
import axios from 'axios';

import STYLE from "./resources/ulogin.module.css"

const AdminLogin = () => {
  let [data, setData] = useState({
    username: "",
    password: ""

  });

  let[adminAuth, setAdminAuth]= useState()
  let navigate= useNavigate();

  useEffect(() => {
  axios
    .get("http://localhost:4000/admin")
    .then(x => setAdminAuth(x.data))
    .catch(err => console.log(err));
}, []);

  let handlechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

  }

  let handlesubmit = (e) => {
    e.preventDefault();

    // let username = adminAuth[0].username;
    // let pass = adminAuth[0].password;

    let admin = adminAuth.find(
      (x) => x.email === data.email && x.password === data.password
    );

    if (admin) {
      toast.success("Admin Login successful");
      window.localStorage.setItem("token",true);
      navigate("/admindashboard")
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div>
      <h1>Admin Login</h1>

      <div id={STYLE.Uform}>

        <table id={STYLE.formTable} border={"1px"}>
          <tbody>

            <tr>
              <td> <label htmlFor="username">Admin Username  :</label>
              </td>
              <td>
                <input type="text" id='username' name='username' onChange={handlechange} /></td>
            </tr>

            <tr>
              <td> <label htmlFor="password">Admin Password  :</label>
              </td>
              <td>
                <input type="password" id='password' name='password' onChange={handlechange} /></td>
            </tr>


            <tr>
              <td> <button onClick={handlesubmit}>LOGIN</button>
              </td>
              <td><Link to={'/admindashboard'}>New User? Create New Account</Link></td>
            </tr>


          </tbody>

        </table>

      </div>

    </div>
  )
}
export default AdminLogin
