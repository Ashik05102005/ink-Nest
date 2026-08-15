import React, { useEffect } from 'react'
import Sidebar from '../../components/Admin.jsx/Sidebar'
import Navbar from '../../components/Admin.jsx/Navbar'
import Stats from '../../components/Admin.jsx/Dashboard/Stats'
import SalesOverview from '../../components/Admin.jsx/Dashboard/SalesOverview'
import TrendingBooks from '../../components/Admin.jsx/Dashboard/TrendingBooks'
import RecentOrders from '../../components/Admin.jsx/Dashboard/RecentOrders'
import { useOrders } from '../../hooks/useOrders'
import {useDispatch} from 'react-redux'
import {setOrders} from '../../redux/slices/OrderSlice'
import LowStock from '../../components/Admin.jsx/Dashboard/LowStock'
function DashBoard() {
  const dispatch = useDispatch()
  const {data:orders , isLoading , error } = useOrders();
  
  useEffect(()=>{
    dispatch(setOrders(orders))
  },[orders,dispatch])

  if(isLoading) return <h1>Loading....</h1>
  if(error) return <h1>error....</h1>
  console.log(orders);
  return (
    <div>
        <Stats />
            <div className='p-3 grid lg:grid-cols-2 gap-4 max-h-200'>
                <SalesOverview />
                <TrendingBooks />
            </div>
            <div className='lg:mt-2  mt-15 p-3 grid lg:grid-cols-2 gap-4'>
              <RecentOrders />
              <LowStock />
            </div>
    </div>
  )
}

export default DashBoard