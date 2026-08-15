import React from 'react'

function OrderSort({sortBy,setSortBy}) {
    return (
        <div>
            <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="
                rounded-lg
                border border-gray-200
                bg-white
                px-4
                py-2.5
                text-sm
                text-gray-700
                outline-none
                focus:border-[#1D7A46]">
                    <option value="newest">
                        Newest
                    </option>

                    <option value="oldest">
                        Oldest
                    </option>

                    <option value="highest">
                        Highest Amount
                    </option>

                    <option value="lowest">
                        Lowest Amount
                    </option>
            </select>
        </div>
    )
}

export default OrderSort