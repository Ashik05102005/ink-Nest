import React from 'react'

function BookStockStatus({status,setStatus}) {
  return (
    <div>
        <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="
                w-36
                h-11
                px-4
                bg-white
                border
                border-gray-200
                rounded-lg
                text-sm
                text-gray-700
                outline-none
                cursor-pointer
                focus:border-[#1D7A46]
                focus:ring-2
                focus:ring-[#1D7A46]/10
            "
            >
            <option value="All Status">
                All Status
            </option>

            <option value="In Stock">
                In Stock
            </option>

            <option value="Low Stock">
                Low Stock
            </option>

            <option value="Out of Stock">
                Out of Stock
            </option>
            </select>
    </div>
  )
}

export default BookStockStatus