import React from 'react'
import { Link } from 'react-router-dom'
import STYLE from "./resources/nav.module.css"
import logo from "./logo1.png"

const Nav = () => {
  return (
    <div id={STYLE.navbar}>
     <Link to={"/"}> <div id={STYLE.logo}><img src={logo} alt="" /></div></Link>

    <div id={STYLE.searchbox}><input type="search" name='search' placeholder='Happy Shopping Serch here....'/>
    <button>🔍</button></div>

      <div id={STYLE.links}>

        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/profile"}>Profile</Link>

        <select
          name="Login"
          id={STYLE.dropdown}
          onChange={(e) => {
            e.preventDefault();
            if (e.target.value) {
              window.location.href = e.target.value;
            }
          }}
        >
          <option value="">Login</option>
          <option value="/adminlogin">Admin Login</option>
          <option value="/userlogin">User Login</option>
        </select>

      </div>
    </div>
  )
}

export default Nav;
