import React from 'react'

function OrderFilterByStatus({statusFilter,setStatusFilter}) {
    return (
        <div>
            <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="
                rounded-lg
                border border-gray-200
                bg-white
                px-4 py-2.5
                text-sm
                outline-none
                focus:border-[#1D7A46]">
                    <option value="all">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
            </select>
        </div>
    )
}

export default OrderFilterByStatus