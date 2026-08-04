import React, { useEffect,useState } from 'react'
import { books } from '../../utils/books'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay';

function BookCarousel() {
    const [emblaRef , emblaApi] = useEmblaCarousel({
        loop:true,
        align : "center"
    },
    [
        Autoplay({
            delay:3000,
            stopOnInteraction: false
            
        })
    ]);
    const [selected , setSelected] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    useEffect(()=>{
        if(!emblaApi) return ;
        const onSelect = ()=>{
            setSelected(emblaApi.selectedScrollSnap());
        }
        setScrollSnaps(emblaApi.scrollSnapList())
        onSelect();
        emblaApi.on("select",onSelect);
        return ()=> emblaApi.off("select" , onSelect)
    },[emblaApi])


  return (
    <div>
    <div className='overflow-hidden h-[560px] hidden lg:block' ref={emblaRef}>
        <div className='flex items-center'>
            {
                books.map((book,index)=>{
                    const active = index===selected;

                    return(
                        <div
                        key={book.id}
                        className='basis-1/3
                        shrink-0
                        flex
                        justify-center
                        '>
                            <img src={book.image}
                                alt={book.title}
                                className={`h-[480px] object-contain transition-all duration-700 ease-out 
                                ${
                                    active ? "scale-180 z-30"
                                           : "scale-90 opacity-50"
                                }`}
                                style={{
                                    transform : active 
                                    ? "prespective(1200px) rotateY(0deg) scale(1.1)"
                                    : index < selected 
                                    ? "prespective(1200px) rotateY(30deg) scale(0.75)"
                                    : "prespective(1200px) rotateY(-30deg) scale(0.75)" ,

                                    filter : active 
                                    ? "drop-shadow(0 30px 30px rgba(0,0,0,.35))"
                                    : "drop-shadow(0 10px 15px rgba(0,0,0,.15))"
                                }}>
                            
                            </img>

                        </div>
                    )
                })
            }
            
        </div>
        <div className="flex justify-center items-center gap-3 mt-6">
                {scrollSnaps.map((_, index) => (
                     <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`transition-all duration-300 rounded-full
            ${
                index === selected
                    ? "w-8 h-3 bg-emerald-500"
                    : "w-3 h-3 bg-gray-400 hover:bg-gray-500"
            }`}
        />
                ))}
            </div>
    </div>
    </div>
  )
}

export default BookCarousel