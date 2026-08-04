import React from 'react'
import { FaStar } from "react-icons/fa";
function CustomerReview() {
    const reviews = [
      {
        image: "src/assets/Customers/c1.png",
        name: "Sarah Johnson",
        role: "Book Enthusiast",
        rating: 5,
        review:
          "InkNest has become my favourite place to buy books. Fast delivery and premium quality."
      },
      {
        image: "src/assets/Customers/c3.png",
        name: "Michael Brown",
        role: "Software Engineer",
        rating: 5,
        review:
        "The programming collection is fantastic. Beautiful UI and smooth shopping experience."
      },
      {
        image: "src/assets/Customers/c2.png",
        name: "Emily Davis",
        role: "College Student",
        rating: 4.9,
        review:
          "Affordable prices and a wonderful collection. I always discover something new."
      },
      {
        image: "src/assets/Customers/c4.png",
        name: "David Wilson",
        role: "Entrepreneur",
        rating: 5,
        review:
          "Business books are genuine and delivered quickly. Highly recommended."
      },
      {
        image: "src/assets/Customers/c5.png",
        name: "Sophia Martinez",
        role: "Teacher",
        rating: 4.8,
        review:
          "I love the clean interface and wide range of books. Finding my next favorite read has never been easier."
      },
      {
        image: "src/assets/Customers/c6.png",
        name: "James Anderson",
        role: "Avid Reader",
        rating: 5,
        review:
          "Excellent customer service, genuine books, and fast shipping. InkNest is now my go-to bookstore for every purchase."
      }
    ];
  return (
    <div className='min-h-50 my-5  pl-3 lg:pl-8 '>
      <div className='flex justify-between pr-3 lg:pr-8 py-3 mb-3'>
        <div>
          <h1 className='text-4xl font-bold'>Don't just take our word for it </h1>
          <p className='text-gray-700'>Hear from some of our amazing customers reviews about us</p>
        </div>
        <div className='py-3'>
          <button className='bg-emerald-700 text-emerald-50 px-2 py-2 rounded '>Create account</button>
        </div>
      </div>
      <div className='flex gap-10  overflow-x-scroll flex-nowrap hide-scrollbar'>
        {
          reviews.map((item)=>(
            <div 
            key={item.name}
            className='w-72 h-105 shrink-0  overflow-hidden relative '>
              <img 
              className='w-full h-full object-cover shrink-0'
              src={item.image}></img>
              <div className='absolute bottom-3 flex flex-col m-2 border bg-white/20 backdrop-blur-xl border-white/60 p-4 text-white rounded-2xl'>
                  <span className='flex items-center gap-1'>
                    {item.rating}
                    <FaStar />
                  </span>
                  <span >"{item.review}"</span>
                  <span>{item.name}</span>
              </div>
            </div>
            
          ))
        } 
      </div> 
    </div>
  )
}

export default CustomerReview