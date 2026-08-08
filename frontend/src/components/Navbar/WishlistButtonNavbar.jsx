import React from 'react'
import { CiHeart } from "react-icons/ci";
import { useSelector } from 'react-redux';


function WishlistButtonNavbar() {
    const wishlist = useSelector(state=>state.wishlist.items);
    console.log(wishlist)
  return (
    <div className="relative inline-flex items-center justify-center">    
      <CiHeart className="lg:text-3xl md:text-2xl text-xl text-gray-700 hover:text-[#1D7A46] transition-colors duration-200 cursor-pointer" />

    {wishlist.length > 0 && (
        <div className="absolute -top-2 -right-2 min-w-5 h-5 px-1
                        rounded-full
                        bg-[#1D7A46]
                        text-white
                        flex
                        items-center
                        justify-center
                        text-[10px]
                        font-bold
                        border-2
                        border-white
                                ">
            {wishlist.length}
        </div>
    )}
</div>
  )
}

export default WishlistButtonNavbar