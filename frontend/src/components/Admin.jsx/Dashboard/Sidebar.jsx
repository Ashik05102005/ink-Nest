import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { GoBook } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiPurchaseTag } from "react-icons/bi";
import { CiStar } from 'react-icons/ci';
import { CiGift } from "react-icons/ci";
import { LuMonitor } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";




function Sidebar() {
  return (
    <div className="  bg-linear-to-b from-[#003F2D] via-[#064C38] to-[#003F2D] h-screen px-3 py-6 flex flex-col justify-between text-white min-w-fit fixed">
        <div>
            {/* Header */}
            <div className='text-white'>
                <h1 className='text-2xl font-semibold'>InkNest</h1>
                <p>Admin panel</p>
            </div>
            {/* Links Buttons  */}
            <div className='mt-6 flex flex-col gap-3 '>
                <button className='flex items-center  gap-2  px-3 py-2 rounded hover:bg-[#0F6B4F]   '>
                    <AiFillHome />
                    <span >DashBoard</span>
                </button>
                <button className='flex items-center  gap-2  px-3 py-2 rounded hover:bg-[#0F6B4F] '>
                    <GoBook />
                    <span >Books</span>
                </button>
                <button className='flex items-center  gap-2  px-3 py-2 rounded hover:bg-[#0F6B4F] '>
                    <HiOutlineShoppingBag />
                    <span >Orders</span>
                </button>
                <button className='flex items-center  gap-2  px-3 py-2 rounded hover:bg-[#0F6B4F] '>
                    <BiPurchaseTag />
                    <span >categories</span>
                </button>
                <button className='flex items-center  gap-2  px-3 py-2 rounded hover:bg-[#0F6B4F] '>
                    <CiStar />
                    <span >Reviews</span>
                </button>
                <button className='flex items-center  gap-2  px-3 py-2 rounded hover:bg-[#0F6B4F] '>
                    <CiGift />
                    <span  >Offers & Discounts</span>
                </button>
                <button className='flex items-center  gap-2  px-3 py-2 rounded hover:bg-[#138865] '>
                    <LuMonitor />
                    <span >HomePage</span>
                </button>
            </div>

        </div>
            {/* Admin details  */}
        <div className='flex flex-col gap-2'>
            <div className=' p-2 flex items-center gap-2 rounded-md bg-white/10 shadow'>
                <div className='border w-8 h-8 flex items-center justify-center rounded-full'>A</div>
                <div >
                    <h1>Admin</h1>
                    <h1 className='text-sm *:'>admin@gmail.com</h1>
                </div>
            </div>
            <button
            className='flex gap-2 items-center  w-full py-2 px-2 rounded-md bg-white/10  shadow'
            >
                <IoIosLogOut />
                <span> Logout </span>
            </button>
        </div>
    </div>
  )
}

export default Sidebar