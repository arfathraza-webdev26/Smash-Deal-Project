import React, { useState } from "react";
import {toast} from "react-toastify";
import axiosInstance from "./helpers/axiosInstance";
import STYLE from "./resources/usignup.module.css";
import { Link, useNavigate } from "react-router-dom";

const UserSignup = () => {
  let navigate = useNavigate();
  let [data, setData] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    email: "",
    mobile: "",
    gender: "",
    password: "",
    confirmpassword: "",
  });

  let handlechange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  let handleSubmit = e => {
    e.preventDefault();
    let payload = data;
    axiosInstance.post("/user", payload);
    toast.success(`Registration successfull`);
    navigate("/userlogin");
  };

  return (
    <div>
      <h1>User Signup</h1>

      <div id={STYLE.Uform}>
        <table id={STYLE.formTable} border={"1px"}>
          <tbody>
            <tr>
              <td>
                <label htmlFor="firstname">First Name :</label>
              </td>
              <td>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  onChange={handlechange}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="lastname">Last Name :</label>
              </td>
              <td>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  onChange={handlechange}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="dob">Date of Birth :</label>
              </td>
              <td>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  onChange={handlechange}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="email">Email :</label>
              </td>
              <td>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handlechange}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="mobile">Mobile Number :</label>
              </td>
              <td>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  onChange={handlechange}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label>Gender :</label>
              </td>

              <td>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                  onChange={handlechange}
                />
                <label htmlFor="male"> Male </label>

                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  onChange={handlechange}
                />
                <label htmlFor="female"> Female </label>

                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="Other"
                  onChange={handlechange}
                />
                <label htmlFor="other"> Other </label>
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="password">Password :</label>
              </td>

              <td>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handlechange}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="confirmpassword">
                  Confirm Password :
                </label>
              </td>

              <td>
                <input
                  type="password"
                  id="confirmpassword"
                  name="confirmpassword"
                  onChange={handlechange}
                />
              </td>
            </tr>

            <tr>
              <td>
                <button onClick={handleSubmit}>SIGN UP</button>
              </td>

              <td>
                <Link to="/userlogin">
                  I have an Account / Login
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserSignup;

