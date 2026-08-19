
import React from 'react'
import Sidebar from '../../components/Admin.jsx/Sidebar'
import Navbar from '../../components/Admin.jsx/Navbar'
import Stats from '../../components/Admin.jsx/Dashboard/Stats'
import SalesOverview from '../../components/Admin.jsx/Dashboard/SalesOverview'
import DashBoard from './DashBoard'
import { Outlet } from 'react-router-dom'
// [#1D7A46]
function Admin() {
  return (
    <div className='flex bg-[#FBFBFB] w-full max-w-full relative'>
        <Sidebar />
        <div className='w-full md:pl-66 '>
            <Navbar />
            <Outlet />
        </div>
    </div>
  )
}

export default Admin