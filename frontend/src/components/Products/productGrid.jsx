import React from 'react'
import ProductSBookCard from '../Cards/ProductSBookCard'

function ProductGrid({books}) {
  return (
    <div>
       <div className="
          
          px-4
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-3
          xl:grid-cols-4
          gap-5">
          {books.map((book) => (
              <div key={book.id}>
                  <ProductSBookCard book={book} />
              </div>
          ))}
      </div>
    </div>
  )
}

export default ProductGrid