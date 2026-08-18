import React, { useState } from 'react'
import UsersStats from '../../components/Admin.jsx/users/UsersStats'
import { LuSearch } from 'react-icons/lu'
import UserFilterByStatus from '../../components/Admin.jsx/users/UserFilterByStatus'
import UsersRoleFilter from '../../components/Admin.jsx/users/UsersRoleFilter'
import UserSort from '../../components/Admin.jsx/users/UserSort'
import { useQuery } from '@tanstack/react-query'
import { useUsers } from '../../hooks/useUsers'
import UsersList from '../../components/Admin.jsx/users/UsersList'
import { useMutateUser } from '../../hooks/Admin/useMutateUser'

function Users() {
  const [statusFilter , setStatusFilter] = useState('all')
  const [roleFilter , setRoleFilter] = useState('all')
  const [sortBy , setSortBy ] = useState("newest");
  const [search , setSearch ] = useState('');

  const {data:users, isLoading , error } = useUsers();
  
  const mutateUser = useMutateUser();
  
  if(isLoading) return<h1>Loading...</h1>


  const onToggleBlock = (user)=>{
    const newStatus = user.status === "active" ? "blocked" : "active";
    mutateUser.mutate({
      id:user.id , 
      data : {status : newStatus },
    })
  }

  const onRoleChange =(id , role)=>{
    mutateUser.mutate({
      id:id , 
      data : {role : role}
    })
  }
  
  const filteredusers = users?.filter((user)=>{

    //Search 
    const Searchmatch = 
          user.name?.toLowerCase().includes(search.toLowerCase())||
          user.email?.toLowerCase().includes(search.toLowerCase()) ;

    // Status 
    const statusMatch = statusFilter === "all" ||
                        user.status?.toLowerCase() === statusFilter.toLowerCase();
    
    // Role 
    const roleMatch =roleFilter==="all" ||
                     user.role?.toLowerCase()=== roleFilter.toLowerCase();

    return Searchmatch && statusMatch && roleMatch;

  })


  const sortedUsers = [...filteredusers].sort((a,b)=>{
    if (sortBy === "newest") {
    return a.id.localeCompare(b.id);
    }

    if (sortBy === "oldest") {
      return b.id.localeCompare(a.id);
    }

    if (sortBy === "nameAZ") {
      return a.name.localeCompare(b.name);
    }

    if (sortBy === "nameZA") {
      return b.name.localeCompare(a.name);
  }
  })

  console.log(search)
  return (
    <div className='p-3'>
      <UsersStats  users={users}/>
      <div className='mt-3 flex justify-between'>
        <div className='relative  w-fit'>
          <input
            onChange={(e)=>setSearch(e.target.value)}
            className='border px-4 py-2 rounded outline-none border-gray-200'
            placeholder='Search users...'
          >
          </input>
          <div className='absolute top-0 h-full right-0  px-2 flex items-center text-gray-400 '>
            <LuSearch />
          </div>
        </div>
        <div className='flex gap-4 '>
          <UserFilterByStatus statusFilter={statusFilter} setStatusFilter={setStatusFilter}/>
          <UsersRoleFilter roleFilter={roleFilter} setRoleFilter={setRoleFilter} />
          <UserSort sortBy={sortBy} setSortBy={setSortBy}/>
        </div>
      </div>
      <div className='mt-5'>
        <UsersList users={sortedUsers} onToggleBlock={onToggleBlock} onRoleChange={onRoleChange}/>
      </div>
    </div>
  )
}

export default Users