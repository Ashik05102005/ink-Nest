import React from 'react'
import Sidebar from '../../components/Admin.jsx/Dashboard/Sidebar'
import Navbar from '../../components/Admin.jsx/Navbar'
import Stats from '../../components/Admin.jsx/Dashboard/Stats'
import SalesOverview from '../../components/Admin.jsx/Dashboard/SalesOverview'
import TrendingBooks from '../../components/Admin.jsx/Dashboard/TrendingBooks'

function DashBoard() {
  return (
    <div>
        <Stats />
            <div className='p-3 grid lg:grid-cols-2 gap-4 max-h-200'>
                <SalesOverview />
                <TrendingBooks />
            </div>
    </div>
  )
}

export default DashBoard