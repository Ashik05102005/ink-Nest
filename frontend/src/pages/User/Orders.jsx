import React, { useEffect } from "react";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/slices/currentUserSlice";
import { FaBoxOpen } from "react-icons/fa";
import NavBar from '../../components/Home/NavBar'


function Orders() {
    const userId = JSON.parse(localStorage.getItem("userId"));

    const {
        data: user,
        isLoading,
        error
    } = useCurrentUser(userId);

    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            dispatch(setCurrentUser(user));
        }
    }, [user, dispatch]);

    if (isLoading) {
        return <h1 className="text-center mt-10">Loading...</h1>;
    }

    if (error) {
        return (
            <h1 className="text-center mt-10 text-red-500">
                {error.message}
            </h1>
        );
    }

    const orders = user?.orders || [];
    console.log(orders)
    return (
      <>
        <NavBar />
        <div className="min-h-screen bg-gray-50 pt-28 py-10 px-4">

            <div className="max-w-4xl mx-auto">

                {/* Heading */}

                <div className="flex items-center gap-3 mb-6">

                    <div className="w-10 h-10 rounded-lg bg-[#1D7A46]/10 flex items-center justify-center">
                        <FaBoxOpen className="text-[#1D7A46]" />
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">
                            My Orders
                        </h1>

                        <p className="text-sm text-gray-500">
                            {orders.length} {orders.length === 1 ? "order" : "orders"}
                        </p>
                    </div>

                </div>


                {/* No Orders */}

                {orders.length === 0 ? (

                    <div className="bg-white border border-gray-200 rounded-xl p-10 text-center">
                        <FaBoxOpen className="mx-auto text-4xl text-gray-300 mb-3" />

                        <h2 className="text-lg font-semibold text-gray-700">
                            No orders yet
                        </h2>

                        <p className="text-gray-500 mt-1">
                            Your orders will appear here.
                        </p>
                    </div>

                ) : (

                    /* Orders List */

                    <div className="space-y-4">

                        {orders.map((order) => (

                            <div
                                key={order.id}
                                className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-sm transition"
                            >

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                                    {/* Order ID */}

                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Order ID
                                        </p>

                                        <p className="font-semibold text-gray-800">
                                            #{order.id}
                                        </p>
                                    </div>


                                    {/* Status */}

                                    <span
                                        className={`px-3 py-1 rounded-full text-sm font-medium w-fit
                                            ${
                                                order.status === "pending"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : order.status === "delivered"
                                                    ? "bg-green-100 text-green-700"
                                                    : order.status === "cancelled"
                                                    ? "bg-red-100 text-red-700"
                                                    : "bg-gray-100 text-gray-700"
                                            }
                                        `}
                                    >
                                        {order.status}
                                    </span>

                                </div>


                                {/* Order Details */}

                                {/* // order items data */}
                                <div className="grid   gap-4 mt-5 pt-4 border-t border-gray-100">
                                        {order.items.map(item=>(
                                            <div 
                                            className=" p-1 border-b border-gray-200 flex gap-5"
                                            key={item.id}>
                                                <img 
                                                className="h-30 w-20 rounded-md "
                                                src={item.image}></img>
                                                <div className="flex flex-col gap-2">
                                                    <h1 className="text-xl font-semibold">{item.title}</h1>
                                                    <span className="text-sm text-gray-500">Quantity : {item.quantity}</span>
                                                    <span className="text-[#1D7A46] text-xl font-semibold"> Rs 500</span>
                                                </div>
                                            </div>
                                        ))}
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-5 pt-4 border-t border-gray-100">

                                    <div>
                                        <p className="text-xs text-gray-500">
                                            Items
                                        </p>

                                        <p className="font-medium text-gray-800">
                                            {order.items?.length || 0}
                                        </p>
                                    </div>


                                    <div>
                                        <p className="text-xs text-gray-500">
                                            Total
                                        </p>

                                        <p className="font-semibold text-[#1D7A46]">
                                            ₹{order.total}
                                        </p>
                                    </div>


                                    <div>
                                        <p className="text-xs text-gray-500">
                                            Payment
                                        </p>

                                        <p className="font-medium uppercase text-gray-800">
                                            {order.PaymentMethod}
                                        </p>
                                    </div>


                                    <div>
                                        <p className="text-xs text-gray-500">
                                            Ordered On
                                        </p>

                                        <p className="font-medium text-gray-800">
                                            {new Date(order.orderAt).toLocaleDateString()}
                                        </p>
                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>
        </>
    );
}

export default Orders;