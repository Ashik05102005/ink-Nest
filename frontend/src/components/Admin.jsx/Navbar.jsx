import React from 'react'
import { CiSearch } from "react-icons/ci";


function Navbar() {
  return (
    <div className='p-3 flex justify-between items-center w-full  '>
        <div>
            <h1 className='text-[#111827] text-2xl font-semibold'>Dashboard</h1>
            <span className='text-[#374151] '>Welcome back, Admin 👋</span>
        </div>
        <div className='flex px-4 gap-3'>
            <div className='relative '>
                <input 
                className='border px-2 py-1 rounded border-[#E5E7EB]'
                placeholder='search anything...'
                type='text '></input>
                <div className='absolute top-0 right-2 flex items-center h-full'>
                    <CiSearch className='text-xl text-[374151]'/>
                </div>
            </div>
            <div className='bg-[#1D7A46] text-white shadow-md w-8 h-8  flex items-center justify-center rounded-full '>
                A
            </div>
        </div>
    </div>
  )
}

export default Navbar