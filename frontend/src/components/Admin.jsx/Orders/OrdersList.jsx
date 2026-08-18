import React, { useState } from 'react'
import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";

function OrdersList({orders=[] , onStatusChange}) {
     const [orderStatus ,setOrderStatus]=useState('')
     const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };
  console.log(orders)
  return (
    <div className="w-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">

      {/* Horizontal scroll for smaller screens */}
      <div className="overflow-x-auto">

        <table className="w-full min-w-[900px] text-sm">

          {/* ================= HEADER ================= */}

          <thead className="border-b border-gray-100 bg-gray-50">

            <tr className="text-left text-gray-500">

              <th className="px-5 py-4 font-medium">
                Order ID
              </th>

              <th className="px-5 py-4 font-medium">
                Customer
              </th>

              <th className="px-5 py-4 font-medium">
                Items
              </th>

              <th className="px-5 py-4 font-medium">
                Amount
              </th>

              <th className="px-5 py-4 font-medium">
                Payment
              </th>

              <th className="px-5 py-4 font-medium">
                Status
              </th>

              <th className="px-5 py-4 font-medium">
                Date
              </th>

              <th className="px-5 py-4 text-center font-medium">
                Actions
              </th>

            </tr>

          </thead>


          {/* ================= BODY ================= */}

          <tbody className="divide-y divide-gray-100">

            {orders.map((order) => (

              <tr
                key={order.id}
                className="transition hover:bg-gray-50"
              >

                {/* Order ID */}

                <td className="px-5 py-4">

                  <span className="font-medium text-gray-800">
                    {order.id}
                  </span>

                </td>


                {/* Customer */}

                <td className="px-5 py-4">

                  <div>

                    <p className="font-medium text-gray-800">
                      {order?.name ||order.shippingAddress?.fullName || "Unknown"}
                    </p>

                    <p className="text-xs text-gray-500">
                      {order?.email || "-"}
                    </p>

                  </div>

                </td>


                {/* Items */}

                <td className="px-5 py-4">

                  <div className="flex items-center gap-3">

                    {/* Book image */}

                    <img
                      src={order.items?.[0]?.image}
                      alt={order.items?.[0]?.title}
                      className="
                        h-10
                        w-8
                        rounded
                        object-cover
                        border
                        border-gray-100
                      "
                    />


                    <div>

                      <p className="
                        max-w-[160px]
                        truncate
                        font-medium
                        text-gray-800
                      ">
                        {order.items?.[0]?.title || "-"}
                      </p>

                      <p className="text-xs text-gray-500">
                        Qty: {order.items?.[0]?.quantity || 1}
                      </p>

                    </div>

                  </div>

                </td>


                {/* Amount */}

                <td className="
                  px-5
                  py-4
                  font-medium
                  text-gray-800
                ">

                  ₹{Number(order.total || 0).toLocaleString("en-IN")}

                </td>


                {/* Payment */}

                <td className="px-5 py-4">

                  <span className="
                    inline-flex
                    rounded-md
                    bg-[#FFF7E6]
                    px-2.5
                    py-1
                    text-xs
                    font-medium
                    uppercase
                    text-[#D99000]
                  ">

                    {order.PaymentMethod === "cod"
                      ? "COD"
                      : order.PaymentMethod}

                  </span>

                </td>


                {/* Status */}

                <td className="px-5 py-4">

                  <span
                    className={`
                      inline-flex
                      rounded-md
                      px-2.5
                      py-1
                      text-xs
                      font-medium
                      capitalize

                      ${
                        order.status === "pending"
                          ? "bg-[#F0EDFF] text-[#6650C8]"
                          : order.status === "processing"
                          ? "bg-[#FFF7E6] text-[#D99000]"
                          : order.status === "shipped"
                          ? "bg-[#EEF4FF] text-[#2563EB]"
                          : order.status === "delivered"
                          ? "bg-[#E8F7F0] text-[#16805A]"
                          : order.status === "cancelled"
                          ? "bg-[#FEECEC] text-[#EF4444]"
                          : "bg-gray-100 text-gray-600"
                      }
                    `}
                  >

                    {order.status}

                  </span>

                </td>


                {/* Date */}

                <td className="px-5 py-4">

                  <p className="text-gray-700">
                    {formatDate(order.orderAt)}
                  </p>

                  <p className="text-xs text-gray-400">
                    {new Date(order.orderAt).toLocaleTimeString("en-IN", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>

                </td>


                {/* Actions */}

                <td className="px-5 py-4">

                  <div className="flex justify-center gap-2">

                    {/* View */}

                    


                    {/* Edit */}

                   <select 
                   onChange={(e)=>onStatusChange(order.id ,e.target.value )}
                   className='border px-4 py-2 rounded-md border-gray-200 shadow text-gray-600'
                   value={order.status}>
                    <option value="pending">Pending</option>
                    <option value="processing">processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="deliverd">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                   </select>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>


      {/* Empty state */}

      {orders.length === 0 && (

        <div className="py-12 text-center text-gray-500">
          No orders found
        </div>

      )}

    </div>
  )
}

export default OrdersList