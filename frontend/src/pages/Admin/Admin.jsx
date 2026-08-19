
import React from 'react'
import Sidebar from '../../components/Admin.jsx/Sidebar'
import Navbar from '../../components/Admin.jsx/Navbar'
import Stats from '../../components/Admin.jsx/Dashboard/Stats'
import SalesOverview from '../../components/Admin.jsx/Dashboard/SalesOverview'
import DashBoard from './DashBoard'
import { Navigate, Outlet, replace } from 'react-router-dom'
import { useCurrentUser } from '../../hooks/useCurrentUser'
// [#1D7A46]
function Admin({allowedRoute}) {
  const userId = JSON.parse(localStorage.getItem("userId"))
  const userRole = JSON.parse(localStorage.getItem("userRole"));
  if(!userId){
    return< Navigate to='/login' replace />
  }
  if(userRole!==allowedRoute){
    return <Navigate to='/' replace />
  }
  const {data:user , isLoading  , error} = useCurrentUser(userId);
  if(isLoading)return <h1>Loading..</h1>
  // console.log(user);

  return (
    <div className='flex bg-[#FBFBFB] w-full max-w-full relative'>
        <Sidebar userData={user}/>
        <div className='w-full md:pl-66 '>
            <Navbar userData={user}/>
            <Outlet />
        </div>
    </div>
  )
}

export default Admin