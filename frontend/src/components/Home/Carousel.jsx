import React from 'react'
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";



function Carousel() {
    const slides = [
        'src/assets/Carousel/ikigai.png',
        'src/assets/Carousel/alkamist.png',
        'src/assets/Carousel/Atomic_habits.png',
        'src/assets/Carousel/psycholagyofmoney.png',
        
    ]
    const [emblaRef, emblaApi] = useEmblaCarousel(
    {
        loop: true,
    },
    [
        Autoplay({
        delay: 6000,
        }),
    ]
    );
  return (
    <div className='relative '>
        <div
        ref={emblaRef}
        className='overflow-hidden mt-3 relative  '
        >
            <div className='flex '>
                {
                    slides.map((image , index)=>(
                        <div
                        className='min-w-full '
                        key={index}
                        >
                            <img
                            src={image}
                            className='w-full  object-fill  sm:80 h-60 md:h-90 lg:h-110 '
                            >
                            </img>
                        </div>
                    ))
                }
                
            </div>
        </div>
            <button 
            className='absolute bottom-1/6 right-1/12 lg:right-20 bg-[#1D7A46] border border-white/20 backdrop-blur-sm   px-4 py-2 rounded md:text-xl font-bold text-white'
            >
                Order Now
            </button> 
        
    </div>
  )
}

export default Carousel