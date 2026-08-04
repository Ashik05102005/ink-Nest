import React from 'react'
import { MdOutlineStar } from "react-icons/md";


function HeroContent() {
  return (
    <div className=' min-h-50  py-4 px-6 lg:px-10 '>
            <span className='flex bg-[#EAF4EC] text-[#1E6B43] w-fit px-4 py-1 rounded-full items-center gap-2'><MdOutlineStar />Trusted by 20k+ Readers</span>
            <div className= 'mt-3 text-4xl font-extrabold font-serif text-[#111111]'>
            <h1 >Good Books</h1>
            <h1>Great <span className='text-[#1D7A46]'>Minds.</span></h1>
            </div>
            <p className='text-[#5F6368] text-sm sm:text-md lg:text-xl mt-2'>
                Explore Thousands of handpicked books across every genre
                Find your next favourate read and enrich your life
            </p>
            <div className='mt-4 flex gap-3'>
                <button className='border px-2 py-2 lg:px-4 lg:text-xl text-sm font-medium rounded-md bg-[#0F8A43] hover:bg-[#0A6B34] text-white '>Explore Books</button>
                <button className=' px-2 py-2 lg:px-4 lg:text-xl text-sm font-medium rounded-md bg-white border border-[#D9D9D9] text-[#1F2937] hover:bg-gray-100'>Browse categories</button>
            </div>
            <div className='flex mt-6 gap-3 overflow-x-visible  w-fit'>
                <div className='flex gap-3'>
                    <img src='src\assets\Hero\person1.png ' className='bg-gray-200 rounded-full w-10  h-10 lg:w-12 lg:h-13 object-cover '></img>
                    <img src='src\assets\Hero\person2.png ' className='bg-gray-200 rounded-full w-10 h-10 lg:w-12 lg:h-13 object-cover '></img>
                    {/* <img src='src\assets\Hero\person3.png ' className='bg-gray-200 rounded-full w-10 h-10 lg:w-12 lg:h-13'></img> */}
                    <img src='src\assets\Hero\person4.png ' className='bg-gray-200 rounded-full w-10 h-10 lg:w-12 lg:h-13 object-cover'></img>
                </div>
                <div className='text-2xl text-[#F5B301] flex flex-col  '>
                    <div className='flex items-center h-10'>
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                    </div>
                    <div className='text-sm text-[#6B7280]'>
                        <p className='text-sm'>Trusted by book lowers accross India</p>
                    </div>
                    
                </div>
            </div>
        </div>
  )
}

export default HeroContent