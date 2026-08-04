// [#1D7A46]
import React from 'react'
import { FaBookOpen } from "react-icons/fa";

function Footer() {
  return (
    <div className='mt-10 min-h-50  max-w-full p-5 flex flex-col md:flex-row '>
        <hr className='text-gray-300 mb-4'></hr>
        <div className='md:w-4/10 md:border-r border-r-gray-300 min-h-20 p-2'>
            <h1 className='flex items-center text-4xl gap-2 font-serif '><FaBookOpen  className='text-[#1D7A46]'/> InkNest</h1>
            <span className='text-[#1D7A46] font-medium'>Discover. Read. Grow</span>
            <p>Your Destination for bestselling books, </p>
            <p>timeless stories, and endless </p>
            <p>inspiration</p>
        </div>
        <div className='md:w-6/10 flex'>
            
            <div className='w-4/12  p-3 border-r border-r-gray-300'>
              <h1>Shop</h1>
              <hr className='w-1/4 border text-[#1D7A46] mt-1'></hr>
              <div className='flex flex-col mt-3 gap-2'>
                <p>Home</p>
                <p>Books</p>
                <p>New Arrivals</p>
                <p>Best Sellers</p>
                <p>Deals & offers</p>
                <p>Authers</p>
              </div>
            </div>
            
            <div className='w-4/12 p-3 border-r border-r-gray-300'>
              <h1>Categories</h1>
              <hr className='w-1/4 border text-[#1D7A46] mt-1'></hr>
              <div className='flex flex-col mt-3 gap-2'>
                <p>Fiction</p>
                <p>Self Help</p>
                <p>Business</p>
                <p>Programming</p>
                <p>History</p>
                <p>Love</p>
              </div>
            </div>
            <div className='w-4/12 p-3 '>
              <h1>Help</h1>
              <hr className='w-1/4 border text-[#1D7A46] mt-1'></hr>
              <div className='flex flex-col mt-3 gap-2'>
                <p>Help Center</p>
                <p>Contact Us</p>
                <p>Shipping & Delivery</p>
                <p>Returns & Refunds</p>
                <p>Order Tracking</p>
              </div>

            </div>
        </div>

    </div>
  )
}

export default Footer