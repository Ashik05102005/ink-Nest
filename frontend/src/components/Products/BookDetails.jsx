import React from "react";
import {
  FaBuilding,
  FaBarcode,
  FaBook,
  FaTag,
  FaGlobe,
  FaRulerCombined,
  FaCalendarAlt,
  FaFileAlt,
} from "react-icons/fa";

function BookDetails({ book }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">

      <h2 className="text-xl font-semibold mb-5">
        Book Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">

        {/* Publisher */}
        <div className="flex items-center gap-3">
          <FaBuilding className="text-gray-500" />

          <div className="flex gap-3">
            <span className="text-gray-600 w-20">
              Publisher
            </span>

            <span className="font-medium">
              {book.publisher}
            </span>
          </div>
        </div>


        {/* ISBN */}
        <div className="flex items-center gap-3">
          <FaBarcode className="text-gray-500" />

          <div className="flex gap-3">
            <span className="text-gray-600 w-20">
              ISBN
            </span>

            <span className="font-medium">
              {book.isbn}
            </span>
          </div>
        </div>


        {/* Category */}
        <div className="flex items-center gap-3">
          <FaTag className="text-gray-500" />

          <div className="flex gap-3">
            <span className="text-gray-600 w-20">
              Category
            </span>

            <span className="font-medium">
              {book.category}
            </span>
          </div>
        </div>


        {/* Edition */}
        <div className="flex items-center gap-3">
          <FaBook className="text-gray-500" />

          <div className="flex gap-3">
            <span className="text-gray-600 w-20">
              Edition
            </span>

            <span className="font-medium">
              {book.edition}
            </span>
          </div>
        </div>


        {/* Language */}
        <div className="flex items-center gap-3">
          <FaGlobe className="text-gray-500" />

          <div className="flex gap-3">
            <span className="text-gray-600 w-20">
              Language
            </span>

            <span className="font-medium">
              {book.language}
            </span>
          </div>
        </div>


        {/* Dimensions */}
        <div className="flex items-center gap-3">
          <FaRulerCombined className="text-gray-500" />

          <div className="flex gap-3">
            <span className="text-gray-600 w-20">
              Dimensions
            </span>

            <span className="font-medium">
              {book.dimensions}
            </span>
          </div>
        </div>


        {/* Format */}
        <div className="flex items-center gap-3">
          <FaBook className="text-gray-500" />

          <div className="flex gap-3">
            <span className="text-gray-600 w-20">
              Format
            </span>

            <span className="font-medium">
              {book.format}
            </span>
          </div>
        </div>


        {/* Release Date */}
        <div className="flex items-center gap-3">
          <FaCalendarAlt className="text-gray-500" />

          <div className="flex gap-3">
            <span className="text-gray-600 w-20">
              Release Date
            </span>

            <span className="font-medium">
              {book.releaseDate}
            </span>
          </div>
        </div>


        {/* Pages */}
        <div className="flex items-center gap-3">
          <FaFileAlt className="text-gray-500" />

          <div className="flex gap-3">
            <span className="text-gray-600 w-20">
              Pages
            </span>

            <span className="font-medium">
              {book.pages}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BookDetails;