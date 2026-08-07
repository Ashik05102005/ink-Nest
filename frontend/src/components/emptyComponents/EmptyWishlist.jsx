import React from "react";
import { HiOutlineHeart } from "react-icons/hi2";
import { Link } from "react-router-dom";

function EmptyWishlist() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-md w-full text-center">
        <div className="w-24 h-24 mx-auto rounded-full bg-red-100 flex items-center justify-center">
          <HiOutlineHeart className="text-5xl text-red-500" />
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-6">
          Your Wishlist is Empty
        </h2>

        <p className="text-gray-500 mt-3 leading-7">
          Save books you love to your wishlist and
          come back anytime to purchase them.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-[#1D7A46] text-white px-6 py-3 rounded-lg hover:bg-[#176238] transition duration-300"
        >
          Discover Books
        </Link>
      </div>
    </div>
  );
}

export default EmptyWishlist;