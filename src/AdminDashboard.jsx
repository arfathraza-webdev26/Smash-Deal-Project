import React from 'react'
import AdminSidebar from './Sidebar/AdminSidebar';
import AdminDashMain from './Sidebar/AdminDashMain';

const AdminDashboard = () => {
  return (
    <div id="dashContainer">
      <AdminDashMain/>
      <AdminSidebar/>
    </div>
  )
}

export default AdminDashboard
