import React, { useState, useEffect } from 'react'
import STYLE from "./resources/ulogin.module.css"
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserLogin = () => {
  let [data, setData] = useState({
    email: "",
    password: ""

  });

  let [userAuth, setUserAuth] = useState();
  let navigate = useNavigate();

 useEffect(() => {
  axios
    .get("http://localhost:4000/user")
    .then(x => setUserAuth(x.data))
    .catch(err => console.log(err));
}, []);

let handlesubmit = (e) => {
  e.preventDefault();

  let user = userAuth.find(
    (x) => x.email === data.email && x.password === data.password
  );

  if (user) {
    toast.success("Login successful");
    navigate("/")
  } else {
    toast.error("Invalid email or password");
  }
};
let handlechange = (e) => {
    
    setData({ ...data, [e.target.name]: e.target.value });

  }
  return (
    <div>
      <h1>User Login</h1>

      <div id={STYLE.Uform}>

        <table id={STYLE.formTable} border={"1px"}>
          <tbody>

          <tr>
            <td> <label htmlFor="email">Email or Phone No.  :</label>
            </td>
            <td>
              <input type="text" id='email' name='email' onChange={handlechange}/></td>
          </tr>

          <tr>
            <td> <label htmlFor="password">Password  :</label>
            </td>
            <td>
              <input type="password" id='password' name='password' onChange={handlechange}/></td>
          </tr>

          
          <tr>
            <td> <button onClick={handlesubmit}>LOGIN</button>
            </td>
            <td><Link to={'/usersignup'}>New User? Create New Account</Link></td>
          </tr>


      </tbody>

        </table>

      </div>

    </div>
  )
}

export default UserLogin
