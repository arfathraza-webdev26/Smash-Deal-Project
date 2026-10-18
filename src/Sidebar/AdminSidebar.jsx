import React from 'react'
import { Link } from 'react-router-dom';


const AdminSidebar = () => {
  return (
    <div id="AdminSidebar">
      <h2>admin Sidebar</h2>
      <div id="ad-sidebar-links">
        <Link to="viewusers">View Users</Link>
        <Link to="viewproducts">View Products</Link>
        <Link to="addproducts">Add Products</Link>
      </div>
    </div>
  )
}

export default AdminSidebar
