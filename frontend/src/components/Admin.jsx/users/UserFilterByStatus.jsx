import React from 'react'

function UserFilterByStatus() {
    return (
        <div>
            <select
                // value={statusFilter}
                // onChange={(e) => setStatusFilter(e.target.value)}
                className="
                rounded-lg
                border border-gray-200
                bg-white
                px-4
                py-2.5
                text-sm
                text-gray-600
                outline-none
                focus:border-[#1D7A46]">
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="blocked">Blocked</option>
            </select>
        </div>
    )
}

export default UserFilterByStatus