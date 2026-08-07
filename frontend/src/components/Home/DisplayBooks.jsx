import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaStar } from "react-icons/fa6";
import WishlistIcon from '../buttons/WishlistIcon';
import CartButton from '../buttons/CartButton';


function DisplayBooks({data}) {
  return (
    <div className=' flex overflow-x-scroll hide-scrollbar justify-around gap-5 py-3'>
            {data.slice(0,6).map((book)=>(
                <div
                key={book.id}
                className='min-w-100 bg-white rounded-md  flex  items-center p-2 gap-2 '
                >
                    <img
                    className='w-40 h-60 rounded'
                    src={book.image}></img>
                    <div className='flex flex-col p-2 h-full justify-around w-full'>
                        <div className=' flex flex-col gap-3 h-fit '>
                            <div className='text-2xl flex justify-end'><WishlistIcon book={book} /></div>
                            <h1 className='text-xl font-semibold '>{book.title}</h1>
                            <p className='text-gray-500 flex items-center gap-2'><FaStar className='text-yellow-400'/>{book?.rating}</p>
                            <p className='font-bold text-gray-800 '>Rs {book.price}</p>
                        </div>
                        <div className='flex flex-col gap-2 mt-2'>
                        <button className='border px-2 py-1 rounded bg-[#1D7A46] text-gray-50'>Buy</button>
                        <CartButton book={book}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
)
}

export default DisplayBooks