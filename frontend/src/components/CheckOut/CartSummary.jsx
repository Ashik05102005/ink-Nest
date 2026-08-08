import React from "react";
import { useSelector } from "react-redux";

function CartSummary({ onPlaceOrder, selectedAddress, isLoading }) {

    const cart = useSelector((state) => state.cart.items);

    const subtotal = cart.reduce(
        (total, book) =>
            total + book.price * (book.quantity || 1),
        0
    );

    const delivery = subtotal >= 500 ? 0 : 40;

    const total = subtotal + delivery;

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">

            {/* Heading */}

            <h2 className="text-xl font-semibold mb-5">
                Order Summary
            </h2>


            {/* Cart Items */}

            <div className="space-y-4">

                {cart.map((book) => (

                    <div
                        key={book.id}
                        className="flex gap-4 border-b border-gray-100 pb-4"
                    >

                        {/* Image */}

                        <img
                            src={book.image}
                            alt={book.title}
                            className="w-16 h-20 object-cover rounded-md"
                        />


                        {/* Book Details */}

                        <div className="flex-1">

                            <h3 className="font-medium text-gray-800 line-clamp-2">
                                {book.title}
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                                {book.author}
                            </p>

                            <div className="flex justify-between items-center mt-2">

                                <span className="text-sm text-gray-500">
                                    Qty: {book.quantity || 1}
                                </span>

                                <span className="font-medium">
                                    ₹{book.price * (book.quantity || 1)}
                                </span>

                            </div>

                        </div>

                    </div>

                ))}

            </div>


            {/* Price Details */}

            <div className="mt-5 space-y-3 text-sm">

                <div className="flex justify-between">
                    <span className="text-gray-500">
                        Subtotal
                    </span>

                    <span>
                        ₹{subtotal}
                    </span>
                </div>


                <div className="flex justify-between">

                    <span className="text-gray-500">
                        Delivery
                    </span>

                    <span
                        className={
                            delivery === 0
                                ? "text-[#1D7A46]"
                                : ""
                        }
                    >
                        {delivery === 0
                            ? "FREE"
                            : `₹${delivery}`
                        }
                    </span>

                </div>

            </div>


            {/* Total */}

            <div className="border-t border-gray-200 mt-5 pt-5">

                <div className="flex justify-between items-center">

                    <span className="text-lg font-semibold">
                        Total
                    </span>

                    <span className="text-xl font-bold text-[#1D7A46]">
                        ₹{total}
                    </span>

                </div>

            </div>


            {/* Place Order Button */}

            <button
                type="button"
                onClick={onPlaceOrder}
                disabled={!selectedAddress || isLoading || cart.length === 0}
                className="
                    w-full
                    mt-6
                    bg-[#1D7A46]
                    text-white
                    py-3
                    rounded-lg
                    font-semibold
                    hover:bg-[#176238]
                    transition
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                "
            >
                {isLoading
                    ? "Placing Order..."
                    : "Place Order"
                }
            </button>

            {!selectedAddress && (
                <p className="text-sm text-red-500 text-center mt-2">
                    Please select a delivery address
                </p>
            )}

        </div>
    );
}

export default CartSummary;