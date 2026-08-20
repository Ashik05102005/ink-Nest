import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaBook, FaShoppingBag, FaUsers } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';
import { toast } from 'sonner';



function Sidebar({userData}) {
  const navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem("userId")
    localStorage.removeItem("userRole");
    toast.warning("Logout Sucessfull")
    navigate('/login')
  }
  return ( 
    <aside className="w-64  md:flex hidden flex-col justify-between min-h-screen bg-[#004D3B] text-white fixed ">
      <nav className="p-4 space-y-2">
      {/* Header */}
            <div className='text-white '>
                <h1 className='text-2xl font-semibold'>InkNest</h1>
                <p>Admin panel</p>
            </div>  

        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg ${
              isActive
                ? "bg-[#087A59]"
                : "hover:bg-[#086047]"
            }`
          }
        >
          <FaHome />
          Dashboard
        </NavLink>


        <NavLink
          to="/admin/books"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg ${
              isActive
                ? "bg-[#087A59]"
                : "hover:bg-[#086047]"
            }`
          }
        >
          <FaBook />
          Books
        </NavLink>


        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg ${
              isActive
                ? "bg-[#087A59]"
                : "hover:bg-[#086047]"
            }`
          }
        >
          <FaShoppingBag />
          Orders
        </NavLink>


        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg ${
              isActive
                ? "bg-[#087A59]"
                : "hover:bg-[#086047]"
            }`
          }
        >
          <FaUsers />
          Users
        </NavLink>
        
        {/* <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg ${
              isActive
                ? "bg-[#087A59]"
                : "hover:bg-[#086047]"
            }`
          }
        >
          <FaUsers />
            HOME
        </NavLink> */}

      </nav>

      <div className='flex flex-col gap-2 p-4'>
            <div className=' p-2 flex items-center gap-2 rounded-md bg-white/10 shadow'>
                <div className='border w-8 h-8 flex items-center justify-center rounded-full'>
                  {userData.name.trim().slice(0,1).toUpperCase()}
                </div>
                <div >
                    <h1>{userData.name}</h1>
                    <h1 className='text-sm '>{userData.email}</h1>
                </div>
            </div>
            <button
            onClick={handleLogout}
            className='flex gap-2 items-center  w-full py-2 px-2 rounded-md bg-white/10  shadow'
            >
                <IoIosLogOut />
                <span> Logout </span>
            </button>
        </div>

    </aside>
  )
}

export default Sidebar

