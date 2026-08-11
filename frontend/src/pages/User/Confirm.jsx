import React from "react";
import { Link, useParams } from "react-router-dom";
// import { FaCheckCircle, FaBoxOpen } from "react-icons/fa";
import { useFetchOrderById } from "../../hooks/useFetchOrderById";
import {
    FaCheckCircle,
    FaBoxOpen,
    FaMapMarkerAlt,
    FaPhone,
    FaCreditCard
} from "react-icons/fa";


function Confirm() {

    const { id } = useParams();
    const {data:orders , isLoading , error} = useFetchOrderById(id);

    if(isLoading) return <h1>Loading ...</h1>
    if(error) return <h1>{error.message}</h1>

    console.log(orders)
const {
        items,
        shippingAddress,
        paymentMethod,
        subtotal,
        delivery,
        total,
        status,
        orderAt
    } = orders;


    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">

            <div className="max-w-4xl mx-auto">

                {/* ================= SUCCESS ================= */}

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">

                    <div className="flex justify-center mb-5">

                        <div className="
                            w-20 h-20
                            rounded-full
                            bg-[#1D7A46]/10
                            flex items-center justify-center
                        ">
                            <FaCheckCircle
                                className="
                                    text-[#1D7A46]
                                    text-5xl
                                "
                            />
                        </div>

                    </div>


                    <h1 className="text-3xl font-bold text-gray-800">
                        Order Confirmed!
                    </h1>

                    <p className="text-gray-500 mt-3">
                        Thank you for your purchase.
                        Your order has been successfully placed.
                    </p>


                    {/* ORDER ID */}

                    <div className="
                        bg-gray-50
                        border
                        border-gray-200
                        rounded-xl
                        p-4
                        mt-6
                    ">

                        <div className="
                            flex
                            items-center
                            justify-center
                            gap-2
                            text-gray-500
                        ">
                            <FaBoxOpen />

                            <span className="text-sm">
                                Order ID
                            </span>
                        </div>

                        <p className="font-semibold text-gray-800 mt-2">
                            #{orders.id}
                        </p>

                        <p className="text-xs text-gray-500 mt-1">
                            {new Date(orderAt).toLocaleString()}
                        </p>

                    </div>

                </div>


                {/* ================= ORDER DETAILS ================= */}

                <div className="grid md:grid-cols-2 gap-5 mt-5">


                    {/* ================= ITEMS ================= */}

                    <div className="
                        bg-white
                        rounded-xl
                        border
                        border-gray-200
                        p-6
                    ">

                        <h2 className="text-xl font-semibold mb-5">
                            Order Items
                        </h2>


                        <div className="space-y-4">

                            {items.map((item) => (

                                <div
                                    key={item.id}
                                    className="
                                        flex
                                        gap-4
                                        border-b
                                        border-gray-100
                                        pb-4
                                        last:border-0
                                    "
                                >

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="
                                            w-16
                                            h-20
                                            object-cover
                                            rounded-md
                                        "
                                    />


                                    <div className="flex-1">

                                        <h3 className="
                                            font-medium
                                            text-gray-800
                                        ">
                                            {item.title}
                                        </h3>

                                        <p className="
                                            text-sm
                                            text-gray-500
                                            mt-1
                                        ">
                                            Quantity: {item.quantity}
                                        </p>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>


                    {/* ================= ADDRESS ================= */}

                    <div className="
                        bg-white
                        rounded-xl
                        border
                        border-gray-200
                        p-6
                    ">

                        <div className="
                            flex
                            items-center
                            gap-3
                            mb-5
                        ">

                            <div className="
                                w-9
                                h-9
                                rounded-lg
                                bg-[#1D7A46]/10
                                flex
                                items-center
                                justify-center
                            ">
                                <FaMapMarkerAlt
                                    className="text-[#1D7A46]"
                                />
                            </div>

                            <h2 className="text-xl font-semibold">
                                Delivery Address
                            </h2>

                        </div>


                        <div className="space-y-2 text-gray-600">

                            <p className="
                                font-semibold
                                text-gray-800
                            ">
                                {shippingAddress.fullName}
                            </p>

                            <p className="whitespace-pre-line">
                                {shippingAddress.address}
                            </p>

                            <p>
                                {shippingAddress.city} -{" "}
                                {shippingAddress.pincode}
                            </p>


                            <div className="
                                flex
                                items-center
                                gap-2
                                pt-2
                            ">

                                <FaPhone className="text-gray-400" />

                                <span>
                                    {shippingAddress.phone}
                                </span>

                            </div>

                        </div>

                    </div>

                </div>


                {/* ================= PAYMENT + PRICE ================= */}

                <div className="
                    bg-white
                    rounded-xl
                    border
                    border-gray-200
                    p-6
                    mt-5
                ">

                    <div className="
                        flex
                        items-center
                        gap-3
                        mb-5
                    ">

                        <FaCreditCard className="text-[#1D7A46]" />

                        <h2 className="text-xl font-semibold">
                            Payment & Price Details
                        </h2>

                    </div>


                    <div className="space-y-3 text-sm">

                        <div className="flex justify-between">

                            <span className="text-gray-500">
                                Payment Method
                            </span>

                            <span className="font-medium uppercase">
                                {paymentMethod}
                            </span>

                        </div>


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

                            <span className={
                                delivery === 0
                                    ? "text-[#1D7A46]"
                                    : ""
                            }>
                                {delivery === 0
                                    ? "FREE"
                                    : `₹${delivery}`
                                }
                            </span>

                        </div>

                    </div>


                    <div className="
                        border-t
                        border-gray-200
                        mt-5
                        pt-5
                        flex
                        justify-between
                        items-center
                    ">

                        <span className="text-lg font-semibold">
                            Total
                        </span>

                        <span className="
                            text-2xl
                            font-bold
                            text-[#1D7A46]
                        ">
                            ₹{total}
                        </span>

                    </div>

                </div>


                {/* ================= STATUS ================= */}

                <div className="
                    mt-5
                    bg-[#1D7A46]/5
                    border
                    border-[#1D7A46]/20
                    rounded-xl
                    p-5
                    text-center
                ">

                    <p className="font-medium text-gray-800">
                        Order Status
                    </p>

                    <span className="
                        inline-block
                        mt-2
                        px-4
                        py-1
                        rounded-full
                        bg-[#1D7A46]/10
                        text-[#1D7A46]
                        text-sm
                        font-medium
                        capitalize
                    ">
                        {status}
                    </span>

                    <p className="
                        text-sm
                        text-gray-500
                        mt-2
                    ">
                        Your order is being processed.
                    </p>

                </div>


                {/* ================= BUTTONS ================= */}

                <div className="
                    flex
                    flex-col
                    sm:flex-row
                    gap-3
                    mt-6
                ">

                    <Link
                        to="/orders"
                        className="
                            flex-1
                            text-center
                            border
                            border-[#1D7A46]
                            text-[#1D7A46]
                            py-3
                            rounded-lg
                            font-medium
                            hover:bg-[#1D7A46]/5
                            transition
                        "
                    >
                        View My Orders
                    </Link>


                    <Link
                        to="/products"
                        className="
                            flex-1
                            text-center
                            bg-[#1D7A46]
                            text-white
                            py-3
                            rounded-lg
                            font-medium
                            hover:bg-[#176238]
                            transition
                        "
                    >
                        Continue Shopping
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default Confirm;