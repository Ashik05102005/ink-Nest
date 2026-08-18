import React from 'react'

function UsersRoleFilter({roleFilter , setRoleFilter}) {
  return (
    <div>
       <select
        value={roleFilter}
        onChange={(e) => setRoleFilter(e.target.value)}
        className="
            rounded-lg
            border border-gray-200
            bg-white
            px-4
            py-2.5
            text-sm
            text-gray-600
            outline-none
            focus:border-[#1D7A46]
        "
        >
        <option value="all">All Users</option>
        <option value="user">Customers</option>
        <option value="admin">Admins</option>
        </select> 
    </div>
  )
}

export default UsersRoleFilter