import React from 'react'
import UsersStats from '../../components/Admin.jsx/users/UsersStats'
import { LuSearch } from 'react-icons/lu'
import UserFilterByStatus from '../../components/Admin.jsx/users/UserFilterByStatus'
import UsersRoleFilter from '../../components/Admin.jsx/users/UsersRoleFilter'
import UserSort from '../../components/Admin.jsx/users/UserSort'

function users() {
  return (
    <div className='p-3'>
      <UsersStats />
      <div className='mt-3 flex justify-between'>
        <div className='relative  w-fit'>
          <input
            className='border px-4 py-2 rounded outline-none border-gray-200'
            placeholder='Search users...'
          >
          </input>
          <div className='absolute top-0 h-full right-0  px-2 flex items-center text-gray-400 '>
            <LuSearch />
          </div>
        </div>
        <div className='flex gap-4 '>
          <UserFilterByStatus />
          <UsersRoleFilter />
          <UserSort />
        </div>
      </div>
    </div>
  )
}

export default users