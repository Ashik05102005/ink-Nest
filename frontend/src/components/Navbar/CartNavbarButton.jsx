import React from 'react'
import { TiShoppingCart } from 'react-icons/ti'
import { useSelector } from 'react-redux'

function CartNavbarButton() {
    const cart = useSelector(state=>state.cart.items)
  return (
    <div className="relative inline-flex items-center justify-center cursor-pointer group">

    <TiShoppingCart
        className="
            lg:text-3xl
            md:text-2xl
            text-xl
            text-gray-700
            group-hover:text-[#1D7A46]
            transition-colors
            duration-200
        "
    />

    {cart.length > 0 && (
        <span
            className="
                absolute
                -top-2
                -right-2
                min-w-5
                h-5
                px-1
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
            "
        >
            {cart.length}
        </span>
    )}

</div>
  )
}

export default CartNavbarButton