import React from 'react'
import { CiSearch } from "react-icons/ci";


function Navbar({userData}) {
  return (
    
    <div className='p-3 flex justify-between items-center w-full  '>
        <div>
            <h1 className='text-[#111827] text-2xl font-semibold'>Admin Dashboard</h1>
            <span className='text-[#374151] '>Welcome back, Admin 👋</span>
        </div>
        <div className='flex px-4 gap-3'>
            <div className='bg-[#1D7A46] text-white shadow-md w-8 h-8  flex items-center justify-center rounded-full '>
                {userData.name.trim().slice(0,1).toUpperCase()}
            </div>
        </div>
    </div>
  )
}

export default Navbar