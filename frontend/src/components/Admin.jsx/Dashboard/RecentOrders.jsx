// import React from 'react'
// import { useSelector } from 'react-redux'

// function RecentOrders() {
//   const orders = useSelector(state=>state.orders.items);
  
//   return (
//     <div className='min-h-50 border sm: mt-10 mx-3 rounded-xl'>
        
//     </div>
//   )
// }

// export default RecentOrders

import React from "react";

import { useOrders } from "../../../hooks/useOrders";



const statusStyles = {
  pending: {
    bg: "bg-[#FFF7E6]",
    text: "text-[#D99000]",
  },

  processing: {
    bg: "bg-[#EAF6FF]",
    text: "text-[#1683C5]",
  },

  shipped: {
    bg: "bg-[#F0EDFF]",
    text: "text-[#6650C8]",
  },

  delivered: {
    bg: "bg-[#E8F7F0]",
    text: "text-[#16805A]",
  },

  cancelled: {
    bg: "bg-[#FEECEC]",
    text: "text-[#DC3545]",
  },
};

function RecentOrders() {
  const {
    data: orders = [],
    isLoading,
    isError,
  } = useOrders()

  // Get only the latest 5 orders
  const recentOrders = [...orders]
    .sort(
      (a, b) =>
        new Date(b.orderAt) - new Date(a.orderAt)
    )
    .slice(0, 5);

  if (isLoading) {
    return (
      <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-5">
          Recent Orders
        </h2>

        <p className="text-sm text-gray-500">
          Loading orders...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-5">
          Recent Orders
        </h2>

        <p className="text-sm text-red-500">
          Failed to load orders.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Recent Orders
        </h2>

        <button
          className="text-sm font-medium text-[#0F6B4F] hover:text-[#0A503B]"
        >
          View all
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>
            <tr className="border-b border-gray-100">

              <th className="px-5 py-3 text-left text-xs font-medium text-gray-500">
                Order ID
              </th>

              <th className="px-5 py-3 text-left text-xs font-medium text-gray-500">
                Customer
              </th>

              <th className="px-5 py-3 text-left text-xs font-medium text-gray-500">
                Date
              </th>

              <th className="px-5 py-3 text-left text-xs font-medium text-gray-500">
                Amount
              </th>

              <th className="px-5 py-3 text-left text-xs font-medium text-gray-500">
                Status
              </th>

            </tr>
          </thead>

          <tbody>

            {recentOrders.map((order) => {

              const status =
                statusStyles[order.status?.toLowerCase()] ||
                statusStyles.pending;

              return (
                <tr
                  key={order.id}
                  className="border-b border-gray-50 last:border-b-0 hover:bg-gray-50 transition"
                >

                  {/* Order ID */}
                  <td className="px-5 py-3.5 text-sm font-medium text-gray-800">
                    #{order.id.slice(-6)}
                  </td>

                  {/* Customer */}
                  <td className="px-5 py-3.5 text-sm text-gray-700">
                    {order.shippingAddress?.name || "Unknown"}
                  </td>

                  {/* Date */}
                  <td className="px-5 py-3.5 text-sm text-gray-600">
                    {new Date(order.orderAt).toLocaleDateString(
                      "en-IN",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </td>

                  {/* Amount */}
                  <td className="px-5 py-3.5 text-sm font-medium text-gray-800">
                    ₹{Number(order.total).toLocaleString("en-IN")}
                  </td>

                  {/* Status */}
                  <td className="px-5 py-3.5">

                    <span
                      className={`
                        inline-flex
                        items-center
                        justify-center
                        min-w-[80px]
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-medium
                        capitalize
                        ${status.bg}
                        ${status.text}
                      `}
                    >
                      {order.status}
                    </span>

                  </td>

                </tr>
              );
            })}

          </tbody>

        </table>

      </div>
    </div>
  );
}

export default RecentOrders;