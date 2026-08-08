import React from 'react'
import CartButton from '../buttons/CartButton'
import WishlistIcon from '../buttons/WishlistIcon'
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


function ProductSBookCard({book}) {
    // console.log(book)
    const navigate =  useNavigate();
  return (
    <div 
    onClick={()=>navigate(`/books/${book.id}`)}
    className='shadow min-h-20  max-h-125 p-3 rounded bg-white flex  gap-4 sm:gap-2 sm:flex-col'>
        <div className="flex justify-center">
            <img 
            className='h-50 rounded-md object-cover'
            src={book.image} alt={book.title}></img>
        </div>
        
        <div className='sm:mt-5 mb-2  flex flex-col gap-2 px-2'>
            <span className='bg-[#1D7A46]/20 text-[#1D7A46] px-4 rounded-3xl py-1 backdrop-blur-lg w-fit '>{book.category}</span>
            <h1 className='font-medium'>{book.title}</h1>
            <p className='text-gray-600'>{book.author}</p>
            <p className='flex items-center gap-1'><FaStar className='text-yellow-400' /> {book.rating}</p>
            <p className='font-medium'>₹ {book.price}</p>
            <div className='flex'>
                <CartButton book={book}/>
                <div className='border mx-2 px-2 rounded flex items-center border-rose-500'>
                    <WishlistIcon book={book}/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ProductSBookCard