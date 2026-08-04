import React from 'react'
import HeroContent from './HeroContent';
import BookCarousel from './BookCarousel';


function Hero() {
  return (
    <div className='  pt-10 w-full  bg-[#F8F6F1]   text-sm lg:text-md grid lg:grid-cols-2 items-center'>
        <HeroContent />
        <BookCarousel />
        
    </div>
  )
}

export default Hero