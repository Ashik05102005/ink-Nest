import React from 'react'
import { IoMdBook } from "react-icons/io";
import { BsBox } from "react-icons/bs";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdBlock } from "react-icons/md";



function BooksStats({books=[]}) {

    const totalBooks = books.length;

    const inStockbooks = books.filter(item=>Number(item.stock || 0) > 20).length;

    const lowStock = books.filter(
        (books)=>{
            const stock = Number(books.stock || 0);
            return stock > 0 && stock <= 20 ;
        }
    ).length;

    const outOfStock = books.filter(book=>Number(book.stock ||0) === 0).length;

    
  return (
    <div className=' m-3 grid lg:grid-cols-4 md:grid-cols-3 gap-2 sm:grid-cols-2 lg:gap-5'>
        <div className='flex items-center gap-4  shadow p-2 rounded'>
            <div className='bg-[#E8F7F0] text-[#16805A] px-3 py-3 rounded-md text-2xl'>
                <IoMdBook />   
            </div>
            <div>
                <h1 className='text-sm text-gray-600 '>Total Books</h1>
                <p className='font-medium text-xl'>{totalBooks}</p>
            </div>
        </div>
        <div className='flex items-center gap-4  shadow p-2 rounded'>
            <div className='bg-[#F0EDFF] text-[#6650C8] px-3 py-3 rounded-md text-2xl'>
                <BsBox />  
            </div>
            <div>
                <h1 className='text-sm text-gray-600 '>In Stock</h1>
                <p className='font-medium text-xl'>{inStockbooks}</p>
            </div>
        </div>
        <div className='flex items-center gap-4  shadow p-2 rounded'>
            <div className='bg-[#FFF7E6] text-[#D99000] px-3 py-3 rounded-md text-2xl'>
                <AiOutlineExclamationCircle />  
            </div>
            <div>
                <h1 className='text-sm text-gray-600 '>Low Stock</h1>
                <p className='font-medium text-xl'>{lowStock}</p>
            </div>
        </div>
        <div className='flex items-center gap-4  shadow p-2 rounded'>
            <div className='bg-red-100 text-red-600 px-3 py-3 rounded-md text-2xl'>
                <MdBlock />   
            </div>
            <div>
                <h1 className='text-sm text-gray-600 '>Out of Stock</h1>
                <p className='font-medium text-xl'>{outOfStock}</p>
            </div>
        </div>
    </div>
  )
}

export default BooksStats