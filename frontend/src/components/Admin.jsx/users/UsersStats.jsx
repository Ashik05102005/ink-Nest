import React from 'react'
import { LuUsers } from "react-icons/lu";
import { FaCircle } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { MdBlock } from "react-icons/md";


function UsersStats() {
  return (
    <div className=' grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-4 '>
        <div className='p-2 flex shadow rounded border border-gray-200 gap-4'>
            <div className='bg-purple-100 text-purple-500 p-3 text-xl rounded'>
              <LuUsers />  
            </div>
            <div>
                <p className='text-sm text-gray-500'>Total</p>
                <p className='text-xl font-medium'>1240</p>
            </div>
        </div>
        <div className='p-2 flex shadow rounded border border-gray-200 gap-4'>
            <div className='bg-green-100 text-green-500 p-3 text-xl rounded'>
              <FaCircle />  
            </div>
            <div>
                <p className='text-sm text-gray-500'>Active</p>
                <p className='text-xl font-medium'>1240</p>
            </div>
        </div>
        <div className='p-2 flex shadow rounded border border-gray-200 gap-4'>
            <div className='bg-yellow-100 text-yellow-500 p-3 text-xl rounded'>
              <TiShoppingCart />  
            </div>
            <div>
                <p className='text-sm text-gray-500'>Customers</p>
                <p className='text-xl font-medium'>1240</p>
            </div>
        </div>
        <div className='p-2 flex shadow rounded border border-gray-200 gap-4'>
            <div className='bg-red-100 text-red-500 p-3 text-xl rounded'>
              <MdBlock />  
            </div>
            <div>
                <p className='text-sm text-gray-500'>Blocked</p>
                <p className='text-xl font-medium'>1240</p>
            </div>
        </div>
    </div>
  )
}

export default UsersStats