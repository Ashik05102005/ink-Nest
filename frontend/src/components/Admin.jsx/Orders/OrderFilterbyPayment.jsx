import React from 'react'

function OrderFilterbyPayment({paymentFilter , setPaymentFilter}) {
    return (
        <div>
            <select
                value={paymentFilter}
                onChange={(e) => setPaymentFilter(e.target.value)}
                className="
                rounded-lg
                border border-gray-200
                bg-white
                px-4 py-2.5
                text-sm
                outline-none
                focus:border-[#1D7A46]">
                    <option value="all">All Payment Methods</option>
                    <option value="cod">Cash on Delivery</option>
                    <option value="online">Online Payment</option>
            </select>
        </div>
    )
}

export default OrderFilterbyPayment