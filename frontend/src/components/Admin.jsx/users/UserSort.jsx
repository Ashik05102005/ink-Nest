import React from 'react'

function UserSort() {
  return (
    <div><select
//   value={sortBy}
//   onChange={(e) => setSortBy(e.target.value)}
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
  <option value="newest">
    Newest
  </option>

  <option value="oldest">
    Oldest
  </option>

  <option value="nameAsc">
    Name A-Z
  </option>

  <option value="nameDesc">
    Name Z-A
  </option>
</select></div>
  )
}

export default UserSort