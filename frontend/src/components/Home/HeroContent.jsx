import React from 'react'
import { MdOutlineStar } from "react-icons/md";
import { Link } from 'react-router-dom';
import { motion } from "motion/react";

function HeroContent() {
  return (
    <div className='min-h-50 py-4 px-6 lg:px-10'>

      {/* Trust badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='flex bg-[#EAF4EC] text-[#1E6B43] w-fit px-4 py-1 rounded-full items-center gap-2'
      >
        <MdOutlineStar />
        Trusted by 20k+ Readers
      </motion.div>


      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.15,
          ease: "easeOut"
        }}
        className='mt-3 text-4xl font-extrabold font-serif text-[#111111]'
      >
        <h1>Good Books</h1>
        <h1>
          Great <span className='text-[#1D7A46]'>Minds.</span>
        </h1>
      </motion.div>


      {/* Description */}
      <motion.p
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.3,
          ease: "easeOut"
        }}
        className='text-[#5F6368] text-sm sm:text-md lg:text-xl mt-2'
      >
        Explore Thousands of handpicked books across every genre.
        Find your next favourite read and enrich your life.
      </motion.p>


      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.45,
          ease: "easeOut"
        }}
        className='mt-4 flex gap-3'
      >
        <Link
          to='/products'
          className='border px-2 py-2 lg:px-4 lg:text-xl text-sm font-medium rounded-md bg-[#0F8A43] hover:bg-[#0A6B34] text-white'
        >
          Explore Books
        </Link>

        <button
          className='px-2 py-2 lg:px-4 lg:text-xl text-sm font-medium rounded-md bg-white border border-[#D9D9D9] text-[#1F2937] hover:bg-gray-100'
        >
          Browse categories
        </button>
      </motion.div>


      {/* Reviews */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.6,
          ease: "easeOut"
        }}
        className='flex mt-6 gap-3 overflow-x-visible w-fit'
      >
        <div className='flex gap-3'>
          <img
            src='src/assets/Hero/person1.png'
            className='bg-gray-200 rounded-full w-10 h-10 lg:w-12 lg:h-13 object-cover'
          />

          <img
            src='src/assets/Hero/person2.png'
            className='bg-gray-200 rounded-full w-10 h-10 lg:w-12 lg:h-13 object-cover'
          />

          <img
            src='src/assets/Hero/person4.png'
            className='bg-gray-200 rounded-full w-10 h-10 lg:w-12 lg:h-13 object-cover'
          />
        </div>

        <div className='text-2xl text-[#F5B301] flex flex-col'>
          <div className='flex items-center h-10'>
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
          </div>

          <div className='text-sm text-[#6B7280]'>
            <p>
              Trusted by book lovers across India
            </p>
          </div>
        </div>
      </motion.div>

    </div>
  )
}

export default HeroContent;