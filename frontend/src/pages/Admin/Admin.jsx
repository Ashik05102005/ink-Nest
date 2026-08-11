
import React from 'react'
import Sidebar from '../../components/Admin.jsx/Dashboard/Sidebar'
import Navbar from '../../components/Admin.jsx/Navbar'
import Stats from '../../components/Admin.jsx/Dashboard/Stats'
import SalesOverview from '../../components/Admin.jsx/Dashboard/SalesOverview'
import TrendingBooks from '../../components/Admin.jsx/Dashboard/TrendingBooks'
import DashBoard from './DashBoard'
// [#1D7A46]
function Admin() {
  return (
    <div className='flex bg-[#FBFBFB] w-full max-w-full relative'>
        <Sidebar />
        <div className='w-full pl-55'>
            <Navbar />
            <DashBoard />
        </div>
    </div>
  )
}

export default Admin