import React from 'react'
import { CiSearch } from 'react-icons/ci'

function SearchComponent({search , setSearch}) {
  return (
    <div>
        <div>
            <div className="relative  h-fit w-full  px-2 py-4 ">
            <input 
            placeholder="search book or author"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className=" outline-0 shadow bg-white h-full px-5 py-3 rounded-md w-full border border-gray-200 focus:border-[#1D7A46]/50 focus:shadow-[#1D7A46]/30"></input>
            <div  className="absolute top-0 right-0 flex items-center  h-full px-6 text-xl ">
                <div className='flex py-2 bg-[#1D7A46] px-3 rounded'>
                    <CiSearch className=' h-full text-white'/>
                </div>
                
            </div>
            </div>
        </div>
    </div>
  )
}

export default SearchComponent