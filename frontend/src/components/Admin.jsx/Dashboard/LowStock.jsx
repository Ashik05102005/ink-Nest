import React from 'react'
import { useBooks } from '../../../hooks/useBooks'
import { Link } from 'react-router-dom'

function LowStock() {
    const {data:books , isLoading , error}  = useBooks()

    if(isLoading) return <h1>Loading...</h1>
    if(error) return <h1>Error...</h1>
    console.log(books);

    books.sort((a,b)=>a.stock - b.stock)
  return (
        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm h-[430px] flex flex-col">

        {/* Fixed Header */}
            <div className="flex items-center justify-between pb-4 flex-shrink-0">

                <h1 className="text-lg font-semibold text-gray-900">
                Low Stock Books
                </h1>

                <Link 
                to={'books'}
                className="text-sm font-medium text-[#1D7A46] hover:text-[#145C34]">
                View all
                </Link>

            </div>


            {/* Scrollable List */}
            <div className="flex-1 overflow-y-auto pr-2 hide-scrollbar">

                <div className="flex flex-col">

                {books.slice(0, 10).map((item, index) => (

                    <div
                    key={item.id}
                    className="
                        flex
                        items-center
                        justify-between
                        gap-3
                        py-3
                        px-2
                        border-b
                        border-gray-50
                        last:border-b-0
                        hover:bg-gray-50
                        rounded-lg
                        transition
                    "
                    >

                    {/* Book Information */}
                    <div className="flex items-center gap-3 min-w-0">

                        {/* Rank */}
                        <span className="w-4 flex-shrink-0 text-sm text-gray-500">
                        {index + 1}
                        </span>

                        {/* Image */}
                        <div className="w-10 h-14 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                        />
                        </div>

                        {/* Title + Author */}
                        <div className="min-w-0">

                        <h2 className="text-sm font-semibold text-gray-900 truncate">
                            {item.title}
                        </h2>

                        <p className="text-xs text-gray-500 mt-1 truncate">
                            {item.author}
                        </p>

                        </div>

                    </div>


                    {/* stock */}
                    <div className="text-right flex-shrink-0 flex items-center justify-between w-1/3">

                        <p className="text-sm font-semibold text-gray-900">
                        {item.stock}
                        </p>

                        {item.stock===0 && <span className='bg-red-200 px-4 text-sm  rounded-full text-red-600'>Out of Stock</span>}
                        {item.stock>0&&item.stock<10? <span className='bg-yellow-200 px-4 text-sm  rounded-full text-yellow-600'>Low Stock</span>:null}
                        {item.stock>10? <span className='bg-green-200 px-4 text-sm  rounded-full text-green-600'>In Stock</span>:null}


                    </div>

                    </div>

                ))}

                </div>

            </div>

        </div>
  )
}

export default LowStock