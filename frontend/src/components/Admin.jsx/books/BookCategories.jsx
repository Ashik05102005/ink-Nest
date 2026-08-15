import React from 'react'


function BookCategories({category,setCategory}) {
  return (
    <div className="relative flex gap-4">
              
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-44 h-11 px-4 pr-8 bg-white border border-gray-200 rounded-lg text-sm text-gray-700
                          outline-nonecursor-pointer focus:border-[#1D7A46] focus:ring-2 focus:ring-[#1D7A46]/10
                "
              >
                <option value="All Categories">
                  All Categories
                </option>

                <option value="Self Help">
                  Self Help
                </option>

                <option value="Finance">
                  Finance
                </option>

                <option value="Fiction">
                  Fiction
                </option>

                <option value="Biography">
                  Biography
                </option>
              </select>
    </div>
  )
}

export default BookCategories


 
              
        //       {/* sort  */}
        //       <select
        //         value={sort}
        //         onChange={(e) => setSort(e.target.value)}
        //         className="w-40 h-11 px-4 bg-white border border-gray-200 rounded-lg text-sm 
        //                 text-gray-700 outline-none cursor-pointer focus:border-[#1D7A46] 
        //                 focus:ring-2 focus:ring-[#1D7A46]/10">
        //         <option value="Newest">
        //         Sort by: Newest
        //         </option>

        //         <option value="Oldest">
        //         Sort by: Oldest
        //         </option>

        //         <option value="PriceLow">
        //         Price: Low to High
        //         </option>

        //         <option value="PriceHigh">
        //         Price: High to Low
        //         </option>

        //         <option value="Name">
        //         Name: A-Z
        //         </option>
        //       </select>
        //   </div>
        // </div>