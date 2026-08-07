import React, { useEffect } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import CartButton from '../buttons/CartButton';
import WishlistIcon from '../buttons/WishlistIcon'
import { FaStar } from "react-icons/fa";
import {useCurrentUser} from "../../hooks/useCurrentUser"
import { useDispatch } from 'react-redux';
import {setCurrentUser} from '../../redux/slices/currentUserSlice'
import { addWishlist } from '../../redux/slices/wishlistSlice';


function WishlistCards({book}) {
   

  return (
    <div
    key={book.id}
    className=' min-h-20 md:w-4/6 flex shadow-md rounded-xl bg-white'
    >
        <div className='p-4 flex gap-5  w-6/10  '>
            <img
            className='h-40 w-30 rounded-md ' 
            src={book.image }></img>

            <div className='flex flex-col gap-2'>
                <h1>{book.title}</h1>
                <h2 className='text-gray-600'>{book.author}</h2>
                <div className="flex items-center gap-1 text-gray-600">
                    <span className='text-yellow-400'><FaStar /></span>
                    {book.rating}
                </div>
                <p className='text-gray-600'>{book.description}</p>
            </div>
        </div>
        <div className='w-4/10  flex p-4 justify-between relative'>
            <div className='flex flex-col justify-end  px-3 pb-2 gap-3 w-50 lg:w-70'>
                <div className='flex justify-between items-center'>
                    <span className='text-xl font-medium'>Rs {book.price}</span>
                    <RiDeleteBin6Line className='border w-7 h-7 p-1 rounded text-rose-500'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <button className='border py-1 rounded text-white bg-[#1D7A46] '>Buy Now</button>
                    <CartButton book = {book}/>
                </div>
            </div>
            <div className='absolute right-2'>
                <WishlistIcon book={book}/>
            </div>
        </div>
        
    </div>
  )
}

export default WishlistCards