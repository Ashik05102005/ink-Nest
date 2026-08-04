import React, { useState } from 'react'
import { useBooks } from '../../hooks/useBooks'
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import DisplayBooks from './DisplayBooks';



export default function MainProducts() {
    // const [productData , setProductData] = useState([])
    const{data, isLoading , error} = useBooks();
    if(isLoading) return <h1>Loading</h1>
    if(data){
        console.log(data);
    }
  return (
    <div className='p-3 bg-gradient-to-r
                        from-emerald-800
                        via-emerald-700
                        to-emerald-800 h-120'>
        <div className='h-20 flex justify-between mt-3 '>
            <h1 className='text-white text-2xl font-bold'>Featurd Books</h1>
            <button
            className='bg-white flex h-10 px-2 items-center text-md rounded-md text-[#1D7A46]'
            >View more <IoIosArrowRoundForward className='flex items-center text-xl'/></button>
        </div>
        <DisplayBooks data={data}/>
        
    </div>
  )
}
