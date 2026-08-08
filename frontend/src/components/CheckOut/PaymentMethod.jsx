import React, { useState } from "react";
import { FaCreditCard, FaMoneyBillWave } from "react-icons/fa";

function PaymentMethod({ payment, setPayment }) {

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">

            {/* Heading */}

            <div className="flex items-center gap-3 mb-6">

                <div className="w-9 h-9 rounded-lg bg-[#1D7A46]/10 flex items-center justify-center">
                    <FaCreditCard className="text-[#1D7A46]" />
                </div>

                <h2 className="text-xl font-semibold">
                    Payment Method
                </h2>

            </div>


            {/* Cash On Delivery */}

            <label
                className={`
                    flex items-center gap-4
                    border rounded-xl
                    p-4
                    cursor-pointer
                    transition
                    ${
                        payment === "cod"
                            ? "border-[#1D7A46] bg-[#1D7A46]/5"
                            : "border-gray-200 hover:border-gray-300"
                    }
                `}
            >

                <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={payment === "cod"}
                    onChange={(e) => setPayment(e.target.value)}
                    className="accent-[#1D7A46] w-4 h-4"
                />

                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                    <FaMoneyBillWave className="text-[#1D7A46] text-xl" />
                </div>

                <div>

                    <p className="font-medium">
                        Cash on Delivery
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                        Pay when your order is delivered
                    </p>

                </div>

            </label>


            {/* Online Payment */}

            <label
                className={`
                    flex items-center gap-4
                    border rounded-xl
                    p-4
                    mt-3
                    cursor-pointer
                    transition
                    ${
                        payment === "online"
                            ? "border-[#1D7A46] bg-[#1D7A46]/5"
                            : "border-gray-200 hover:border-gray-300"
                    }
                `}
            >

                <input
                    type="radio"
                    name="payment"
                    value="online"
                    checked={payment === "online"}
                    onChange={(e) => setPayment(e.target.value)}
                    className="accent-[#1D7A46] w-4 h-4"
                />

                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                    <FaCreditCard className="text-[#1D7A46] text-xl" />
                </div>

                <div>

                    <p className="font-medium">
                        Online Payment
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                        Pay securely using UPI, Card or Net Banking
                    </p>

                </div>

            </label>

        </div>
    );
}

export default PaymentMethod;