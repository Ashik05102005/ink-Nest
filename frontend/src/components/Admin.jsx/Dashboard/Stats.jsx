import React from 'react'
import { IoBookOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { CgNotes } from "react-icons/cg";
import { useSelector } from 'react-redux';



function Stats() {
    
    const orders = useSelector(state=>state.orders.items);
    
  return (
        <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 p-3'>

            {/* books  */}
            <div className="shadow-md border border-gray-200 p-2 rounded-md flex gap-4">
                <div className=' w-fit p-3 text-2xl rounded-md bg-[#E8F7F0] text-[#16805A]'>
                    <IoBookOutline />
                </div>
                <div className='flex flex-col'>
                    <span className='text-sm text-[#374151]'>Total Books</span>
                    <span className='text-[#111827] text-xl font-medium'>1245</span>
                </div>
            </div>

            {/* Orders  */}
            <div className="shadow-md border border-gray-200 p-2 rounded-md flex gap-4">
                <div className=' w-fit p-3 text-2xl rounded-md bg-[#F0EDFF] text-[#6650C8]'>
                    <HiOutlineShoppingBag />
                </div>
                <div className='flex flex-col'>
                    <span className='text-sm text-[#374151]'>Total Orders</span>
                    <span className='text-[#111827] text-xl font-medium'>{orders?orders.length:0}</span>
                </div>
            </div>

            {/* Users  */}
            <div className="shadow-md border border-gray-200 p-2 rounded-md flex gap-4">
                <div className=' w-fit p-3 text-2xl rounded-md bg-[#FFF6D9] text-[#D99A00]'>
                    <GoPeople />
                </div>
                <div className='flex flex-col'>
                    <span className='text-sm text-[#374151]'>Total Users</span>
                    <span className='text-[#111827] text-xl font-medium'>1245</span>
                </div>
            </div>

            {/* revenue  */}
            <div className="shadow-md border border-gray-200 p-2 rounded-md flex gap-4">
                <div className=' w-fit p-3 text-2xl rounded-md bg-[#E5F7EF] text-[#159B6B]'>
                    <HiOutlineCurrencyRupee />
                </div>
                <div className='flex flex-col'>
                    <span className='text-sm text-[#374151]'>Total Revenue</span>
                    <span className='text-[#111827] text-xl font-medium'>
                        {
                            orders 
                                ? orders.reduce((total , item)=>total+=item.total,0) 
                                : 0
                        }</span>
                </div>
            </div>

            {/* pending orders  */}
            <div className="shadow-md border border-gray-200 p-2 rounded-md flex gap-4">
                <div className=' w-fit p-3 text-2xl rounded-md bg-[#FDECEF] text-[#D9364F]'>
                    <CgNotes />
                </div>
                <div className='flex flex-col'>
                    <span className='text-sm text-[#374151]'>Pending Orders</span>
                    <span className='text-[#111827] text-xl font-medium'>
                        {
                            orders 
                                ?orders.reduce((total , item)=>{
                                    if(item.status === "pending"){
                                        return total+=1
                                    }
                                },0):0
                        }
                    </span>
                </div>
            </div>
        </div>
  )
}

export default Stats