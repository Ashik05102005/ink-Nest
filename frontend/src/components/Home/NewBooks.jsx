import React, { useState } from 'react'
import { useBooks } from '../../hooks/useBooks'
import { MdHorizontalRule } from "react-icons/md";
import DisplayBooks from './DisplayBooks'
import Carousel from './Carousel';

function NewBooks() {
    const {data, isLoading , error} = useBooks();
    const [sortedData , setSortedData]= useState([]);
    if(isLoading)return <h1>Loading</h1>
    if(error)return <h1>Loading</h1>
    const removeDeletedData = data.filter((book)=>!book.deleted)
    if(removeDeletedData){
        removeDeletedData.sort((a,b)=> new Date(b.releaseDate)-new Date(a.releaseDate));
    }

  return (
    <div className='m-3  min-h-50 lg:mx-8'>
        <div>
            {/* <img 
            className='lg:h-100 max-w-full w-full rounded-xl mt-2 '
            src='src/assets/NewBooks/image.png'></img> */}
            
        </div>
        <div className='flex flex-col items-center mt-3 text-green-900'>
            <div className='flex items-center justify-center gap-3'>
                <hr className='w-5 border-t-2'></hr>
                <h1 className='font-bold'>OUR COLLECTION</h1>
                <hr className='w-5 border-t-2'></hr>
            </div>
            <h1 className='text-6xl mt-2 font-serif'>New Arrivals</h1>
            <p className='mt-1 text-gray-800'>The latest books just landed . Be the first to read what's new!</p>
        </div> 
        <div className='mt-3'>
            <DisplayBooks data={removeDeletedData}/>
        </div>

    </div>
  )
}

export default NewBooks