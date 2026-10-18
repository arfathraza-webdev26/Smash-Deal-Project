import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from "./Nav.jsx"
import UserSignup from "./UserSignup.jsx"
import UserLogin from "./UserLogin.jsx"
import AdminLogin from "./AdminLogin.jsx"
import AdminSignup from "./AdminSignup.jsx"
import Home from "./Home.jsx"

import "./global.css";
import AdminDashboard from './AdminDashboard.jsx'
import ViewProducts from './Sidebar/ViewProducts.jsx'
import ViewUsers from './Sidebar/ViewUsers.jsx'
import AddProducts from './Sidebar/AddProducts.jsx'
import Updateuser from './Updateuser.jsx'
import { ToastContainer } from 'react-toastify'
import EditProducts from './EditProducts.jsx'

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/adminsignup" element={<AdminSignup />} />
          <Route path="/usersignup" element={<UserSignup />} />
          <Route path="/admindashboard" element={<AdminDashboard/>} >
                <Route path='viewusers' element={<ViewUsers/>}/>
                <Route path='viewproducts' element={<ViewProducts/>}/>
                <Route path="updateuser/:id" element={<Updateuser/>}/>
                <Route path='addproducts' element={<AddProducts/>}/>

                 <Route path="editproducts/:id" element={<EditProducts/>}/>

          </Route>

        </Routes>
        <ToastContainer/>
      </Router>

    </div>
  )
}

export default App
