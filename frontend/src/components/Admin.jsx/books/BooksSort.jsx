import React from 'react'

function BooksSort({sort ,setSort}) {
  return (
    <div>
         <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="
            h-10
            rounded-lg
            border
            border-gray-200
            bg-white
            px-3
            text-sm
            text-gray-600
            outline-none
            focus:border-[#1D7A46]
          "
        >

          <option value="newest">
            Newest
          </option>

          <option value="oldest">
            Oldest
          </option>

          <option value="price-low">
            Price: Low to High
          </option>

          <option value="price-high">
            Price: High to Low
          </option>

          <option value="name">
            Name: A-Z
          </option>

          <option value="stock-low">
            Stock: Low to High
          </option>

        </select>
    </div>
  )
}

export default BooksSort