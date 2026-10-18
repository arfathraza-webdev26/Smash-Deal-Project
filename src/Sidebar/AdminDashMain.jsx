import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminDashMain = () => {
  return (
    <div id='Admin-dash-main'>
      <Outlet />
    </div>
  )
}

export default AdminDashMain
