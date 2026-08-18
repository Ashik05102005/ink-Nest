import React from 'react'

function UsersList({users , onToggleBlock , onRoleChange}) {
  return  (
    <div className="w-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">

      {/* Table Header */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left">

          <thead className="border-b border-gray-100 bg-gray-50/70">
            <tr>
              <th className="px-6 py-4 text-sm font-medium text-gray-500">
                User
              </th>

              <th className="px-6 py-4 text-sm font-medium text-gray-500">
                Email
              </th>

              <th className="px-6 py-4 text-sm font-medium text-gray-500">
                Orders
              </th>

              <th className="px-6 py-4 text-sm font-medium text-gray-500">
                Total Spend
              </th>

              <th className="px-6 py-4 text-sm font-medium text-gray-500">
                Status
              </th>

              <th className="px-6 py-4 text-sm font-medium text-gray-500">
                Role
              </th>

              <th className="px-6 py-4 text-sm font-medium text-gray-500 text-center">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-100">

            {users?.map((user) => (

              <tr
                key={user.id}
                className="transition hover:bg-gray-50"
              >

                {/* User */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">

                    {/* Avatar */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8F7F0] text-[#16805A] font-semibold">
                      {user.name?.charAt(0).toUpperCase()}
                    </div>

                    <div>
                      <p className="font-medium text-gray-900">
                        {user.name}
                      </p>

                      <p className="text-sm text-gray-500">
                        {user.username || user.name}
                      </p>
                    </div>

                  </div>
                </td>


                {/* Email */}
                <td className="px-6 py-4">
                  <p className="text-sm text-gray-700">
                    {user.email}
                  </p>
                </td>


                {/* Orders */}
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-gray-800">
                    {user.orders.length || 0}
                  </span>
                </td>


                {/* Total Spend */}
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-gray-800">
                    {user?.orders?.reduce((total, ord) => total + ord.total, 0) || 0}
                  </span>
                </td>


                {/* Status */}
                <td className="px-6 py-4">

                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-medium
                      ${
                        user.status === "blocked"
                          ? "bg-red-50 text-red-600"
                          : "bg-[#E8F7F0] text-[#16805A]"
                      }
                    `}
                  >
                    {user.status === "blocked" ? "Blocked" : "Active"}
                  </span>

                </td>


                {/* Role */}
                <td className="px-6 py-4">

                  <select
                    value={user.role || "user"}
                    onChange={(e) =>
                      onRoleChange(user.id, e.target.value)
                    }
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-[#1D7A46] focus:ring-2 focus:ring-[#E8F7F0]"
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>

                </td>


                {/* Action */}
                <td className="px-6 py-4 text-center">

                  <button
                    onClick={() => onToggleBlock(user)}
                    className={`rounded-lg border px-4 py-2 text-sm font-medium transition
                      ${
                        user.status === "blocked"
                          ? "border-[#1D7A46] text-[#1D7A46] hover:bg-[#E8F7F0]"
                          : "border-red-200 text-red-600 hover:bg-red-50"
                      }
                    `}
                  >
                    {user.status === "blocked"
                      ? "Unblock"
                      : "Block"}
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>
      </div>
    </div>
  );
}

export default UsersList