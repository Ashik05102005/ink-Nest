import React from 'react'
import { useParams } from 'react-router-dom'
import { useBookById } from '../../hooks/useBookById'
import { FaStar } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { CiDeliveryTruck } from "react-icons/ci";
import CartButton from '../buttons/CartButton';
import { LuBuilding2 } from "react-icons/lu";
import BookDetails from './BookDetails';
import NavBar from '../Home/NavBar';
import WishlistIcon from '../buttons/WishlistIcon';






function ProductView() {
    const {id} = useParams()
    const {data:book ,isLoading ,error}=useBookById(id);
    if(isLoading) return <h1>Loading...</h1>
    if(error) return <h1>error...</h1>
    console.log(book)
  return (
    <div className=''>
        <NavBar />
        <div className="flex justify-center items-center min-h-120 pt-30 sm:flex-row flex-col">
            <div className="md:w-3/8 flex  justify-center ">
                <img 
                className='h-80 rounded-md '
                src={book.image} alt={book.title} />
            </div>
            <div className="w-5/8 flex flex-col gap-3 pl-4 md:pr-40">
                <span className='flex justify-between'>
                    <span className='text-[#1D7A46] bg-[#1D7A46]/20 w-fit px-3 py-1 rounded-xl '>{book.trending?"Best Seller":null}</span>
                </span>
                <h1 className='text-4xl font-medium'>{book.title}</h1>
                <p>By <span className='text-[#1D7A46]'>{book.author}</span></p>
                <div className='flex gap-3 items-center'>
                    <span>
                        <FaStar className='text-yellow-400'/>
                    </span>
                    <span>
                        {book.rating}
                    </span>
                    <span className='text-gray-500'>
                        ({book.reviewCount} reviews)
                    </span>
                </div>
                <div className='flex gap-7 items-baseline'>
                    <span className='flex font-medium text-3xl text-[#1D7A46]'>₹ {book.price}</span>
                    <del className='text-gray-500'>₹ {Math.ceil(book.price+(book.price*(30/100)))}</del>
                    <span className='text-[#1D7A46] bg-[#1D7A46]/20 px-3 py-1 rounded-md'>30% OFF</span>
                </div>
                <div className='flex'>
                    <span className='flex text-[#1D7A46] items-center gap-2 pr-4 border-r border-r-gray-400'>
                        <span>{book.stock>=1?<TiTick className=''/>:<ImCross />}</span>
                        <span className=''>{book.stock>=1?`$In Stock(${book.stock}available)`:"Out Of Stock"}</span>
                    </span>
                    <span className='flex pl-4 items-center gap-2 text-gray-700'>
                        <span><CiDeliveryTruck /></span>
                        <span>Ships within 24 hours</span>
                    </span>
                </div>

                <div>
                    <div className='flex gap-1'>
                        <CartButton  book={book}/>
                        <div className='flex items-center border px-2 border-rose-500 rounded-md'>
                            <WishlistIcon book={book}/>
                        </div>
                    </div>
                    <button className='flex border w-full mt-2 py-1 justify-center rounded'>Buy Now</button>
                </div>
                
                
            </div>
        </div>
        <div className="lg:flex">
            <div className='lg:w-1/2 w-full'>
                    <BookDetails book={book} />
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 lg:w-1/2 w-full">
                <h1 className="text-xl font-semibold mb-5">About the Book</h1>
                <div>{book.description}</div>
            </div>
        </div>
    </div>
  )
}

export default ProductView