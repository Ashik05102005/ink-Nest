import React from 'react'
import { useBooks } from '../../../hooks/useBooks'

function TrendingBooks() {
    const {data:books , isLoading , error} = useBooks();
    if(isLoading) return <h1>Loading....</h1>
    if(error) return <h1>Error....</h1>
    books.sort((a,b)=>b.trending - a.trending);
    console.log(books)
  return (
    <div className=' rounded-xl p-5 border border-gray-100 shadow-md h-100 overflow-hidden overflow-y-scroll hide-scrollbar'>
        <div className='flex justify-between'>
            <h1 className='text-xl font-medium '>Top Selling Books</h1>
            <button className='text-[#1D7A46]'>View all</button>
        </div>
        <div className='mt-4 flex flex-col gap-2'>
            {books.slice(0,10).map(item=>(
                <div  
                className=' flex justify-between items-center'
                key={item.id}>
                    <div className='flex gap-3 items-center'>
                        <img 
                            className='h-20 '
                            src={item.image}>
                        </img>
                        <div>
                            <h1 className='font-medium'>{item.title}</h1>
                            <p className='text-sm text-gray-500'>{item.author}</p>
                        </div>
                    </div>

                    <div className='px-3'>
                        {/* //product sale data */}
                    </div>
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default TrendingBooks