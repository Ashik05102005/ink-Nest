import React, { useState } from 'react'

function FilterSidebar({setSelectedCatagory,selectedCatagory ,maxPrice ,setMaxPrice}) {
    
    const categories = [
                        "All",
                        "Self Help",
                        "Finance",
                        "Fiction",
                        "Business",
                        "Programming",
                        "Others"
                        ];
    const clearHandler =()=>{
        setMaxPrice(1000);
        setSelectedCatagory("All")
    }

  return (
    <div className='min-h-100 bg-white rounded-xl shadow-md p-3'>
        <div className='px-2'>
            <h1 className='font-medium'>Categories</h1>
            <div className='flex flex-col gap-3 mt-3'>
                {categories.map((category)=>(
                    <label key={category}>
                        <input 
                        type='radio'
                        name='category'
                        value={category}
                        checked ={selectedCatagory === category}
                        onChange={(e)=> setSelectedCatagory(e.target.value)}
                        className='hidden'
                        />

                        <div
                            className={`px-3 py-1 rounded-lg border cursor-pointer transition ${
                                selectedCatagory === category
                                    ? "bg-[#1D7A46] text-white border-[#1D7A46]"
                                    : "bg-white border-gray-300 hover:bg-gray-50"
                            }`}
                        
                        >{category}</div>
                    </label>
                ))}   
            </div>
        </div>
        <div className='px-3 mt-5'>
            <h3 className="font-medium mb-4">
                Price
            </h3>

            <input
                type="range"
                min="0"
                max="1000"
                step="50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#1D7A46]"
            />

            <div className="flex justify-between text-sm text-gray-500">
                <span>₹0</span>
                <span>₹{maxPrice}</span>
            </div>
            <div className='mt-5'>
                <button
                className='border w-full py-2 border-[#1D7A46] text-[#1D7A46] rounded-md '
                onClick={clearHandler}
                >Clear All</button>
            </div>
        </div>
    </div>
  )
}

export default FilterSidebar