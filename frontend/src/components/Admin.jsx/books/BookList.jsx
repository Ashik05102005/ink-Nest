import React from "react";
import {
  FiEdit2,
  FiEye,
  FiTrash2,
  FiPlus,
  FiSearch,
} from "react-icons/fi";

function BookList({books}) {
  return (
    <div>
         <div className="hidden overflow-x-auto md:block">

        <table className="w-full min-w-[850px] border-collapse">

          <thead>
            <tr className="border-b border-gray-100">

              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500">
                Book
              </th>

              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500">
                Author
              </th>

              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500">
                Category
              </th>

              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500">
                Price
              </th>

              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500">
                Stock
              </th>

              {/* <th className="px-3 py-3 text-left text-xs font-medium text-gray-500">
                Sold
              </th> */}

              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500">
                Status
              </th>

              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500">
                Actions
              </th>

            </tr>
          </thead>


          <tbody>

            {books.map((book) => {

              const stock = Number(book.stock || 0);

              const status =
                stock === 0
                  ? "Out of Stock"
                  : stock <= 20
                  ? "Low Stock"
                  : "In Stock";

              return (
                <tr
                  key={book.id}
                  className="
                    border-b border-gray-50
                    transition hover:bg-gray-50
                  "
                >

                  {/* BOOK */}
                  <td className="px-3 py-3">

                    <div className="flex items-center gap-3">

                      <img
                        src={book.image}
                        alt={book.title}
                        className="
                          h-14 w-10
                          rounded object-cover
                          bg-gray-100
                        "
                      />

                      <div className="min-w-0">

                        <h3 className="
                          max-w-[180px]
                          truncate
                          text-sm font-semibold
                          text-gray-900
                        ">
                          {book.title}
                        </h3>

                        <p className="mt-1 text-[11px] text-gray-400">
                          ISBN: {book.isbn || "N/A"}
                        </p>

                      </div>

                    </div>

                  </td>


                  {/* AUTHOR */}
                  <td className="px-3 py-3 text-sm text-gray-600">
                    {book.author}
                  </td>


                  {/* CATEGORY */}
                  <td className="px-3 py-3">

                    <span className="
                      rounded-md
                      bg-[#E8F7F0]
                      px-2.5 py-1
                      text-[11px]
                      font-medium
                      text-[#1D7A46]
                    ">
                      {book.category || "Book"}
                    </span>

                  </td>


                  {/* PRICE */}
                  <td className="px-3 py-3 text-sm font-semibold text-gray-900">
                    ₹{Number(book.price || 0).toLocaleString("en-IN")}
                  </td>


                  {/* STOCK */}
                  <td className="px-3 py-3">

                    <span
                      className={`
                        text-sm font-semibold
                        ${
                          stock === 0
                            ? "text-red-500"
                            : stock <= 20
                            ? "text-orange-500"
                            : "text-[#16805A]"
                        }
                      `}
                    >
                      {stock}
                    </span>

                  </td>

                  {/* STATUS */}
                  <td className="px-3 py-3">

                    <span
                      className={`
                        rounded-md px-2.5 py-1
                        text-[10px] font-medium
                        ${
                          status === "In Stock"
                            ? "bg-[#E8F7F0] text-[#16805A]"
                            : status === "Low Stock"
                            ? "bg-[#FFF7E6] text-[#F59E0B]"
                            : "bg-[#FEECEC] text-[#EF4444]"
                        }
                      `}
                    >
                      {status}
                    </span>

                  </td>


                  {/* ACTIONS */}
                  <td className="px-3 py-3">

                    <div className="flex items-center gap-3">

                      <button
                        // onClick={() => onEdit?.(book)}
                        className="
                          flex h-8 w-8 items-center justify-center
                          rounded-md border border-gray-200
                          text-[#16805A]
                          transition hover:bg-[#E8F7F0]
                        "
                      >
                        <FiEdit2 size={14} />
                      </button>

                      <button
                        // onClick={() => onDelete?.(book)}
                        className="
                          flex h-8 w-8 items-center justify-center
                          rounded-md border border-gray-200
                          text-red-500
                          transition hover:bg-red-50
                        "
                      >
                        <FiTrash2 size={14} />
                      </button>

                    </div>

                  </td>

                </tr>
              );
            })}

          </tbody>

        </table>

      </div>
    </div>
  )
}

export default BookList