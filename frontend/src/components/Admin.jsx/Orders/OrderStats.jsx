import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2";

import { SiStagetimer } from "react-icons/si";

import { PiTruck } from "react-icons/pi";

import { CiDeliveryTruck } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";


import { SiTicktick } from "react-icons/si";

import { MdOutlineCancel } from "react-icons/md";


function OrderStats() {
  return (
    <div className=' p-3 grid md:grid-cols-6 gap-4 grid-cols-2 '>
        {/* // Total Orders */}
        <div className=' p-3 rounded  flex gap-3 border border-gray-100 shadow'>    
            <div className="bg-[#E8F7F0] text-[#16805A]  text-2xl p-3 rounded-md">
                <HiOutlineShoppingBag />
            </div>
            <div>
                    <p className='text-sm text-gray-600 '>Total Orders</p>
                    <p className='font-medium text-xl'>1245</p>
                </div>
        </div>
        {/* // Pending */}
        <div className=' p-3 rounded  flex gap-3 border border-gray-100 shadow'>    
            <div className="bg-[#F0EDFF] text-[#6650C8]  text-2xl p-3 rounded-md">
                <SiStagetimer />
            </div>
            <div>
                    <p className='text-sm text-gray-600 '>Pending</p>
                    <p className='font-medium text-xl'>1245</p>
                </div>
        </div>

       {/* // Shipped */}
        <div className=' p-3 rounded  flex gap-3 border border-gray-100 shadow'>    
            <div className="bg-[#EEF4FF] text-[#3B82F6]  text-2xl p-3 rounded-md">
                <CiDeliveryTruck />
            </div>
            <div>
                    <p className='text-sm text-gray-600 '>Shipping</p>
                    <p className='font-medium text-xl'>1245</p>
                </div>
        </div>

        
        {/* // Processing */}
        <div className=' p-3 rounded  flex gap-3 border border-gray-100 shadow'>    
            <div className="bg-yellow-50 text-yellow-500  text-2xl p-3 rounded-md">
                <IoSettingsOutline />
            </div>
            <div>
                    <p className='text-sm text-gray-600 '>Processing</p>
                    <p className='font-medium text-xl'>1245</p>
                </div>
        </div>
        {/* // Delivered */}
        <div className=' p-3 rounded  flex gap-3 border border-gray-100 shadow'>    
            <div className="bg-[#E8F7F0] text-[#16805A]   text-2xl p-3 rounded-md">
                <SiTicktick />
            </div>
            <div>
                    <p className='text-sm text-gray-600 '>Delivered</p>
                    <p className='font-medium text-xl'>1245</p>
                </div>
        </div>

        {/* // Cancelled */}
        <div className=' p-3 rounded flex gap-3 border border-gray-100 shadow'>    
            <div className="bg-[#FEECEC] text-[#EF4444]  text-2xl p-3 rounded-md">
               <MdOutlineCancel />
            </div>
            <div>
                    <p className='text-sm text-gray-600 '>Cancelled</p>
                    <p className='font-medium text-xl'>1245</p>
                </div>
        </div>

    </div>
  )
}

export default OrderStats