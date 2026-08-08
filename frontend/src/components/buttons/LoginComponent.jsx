import React from 'react'
import { CiLogin, CiLogout } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom';



function LoginComponent() {

  const navigate = useNavigate()
  const userId = JSON.parse(localStorage.getItem("userId"));
  const LoginHandler = ()=>{
    navigate('/login')
  }
  const LogoutHandler = ()=>{
    localStorage.removeItem("userId");
    navigate('/login')

  }

  return (
    <div>
      {
      userId
      ?<button 
        onClick={LogoutHandler}
        className='flex items-center gap-2  px-2 py-1 rounded text-emerald-50 bg-[#1D7A46]'><CiLogout /> <span className='hidden sm:block'>Logout</span></button>
      :<button
        onClick={LoginHandler}
        className='flex items-center gap-2  px-2 py-1 rounded text-emerald-50 bg-[#1D7A46]'><CiLogin /> Login</button>
      }
      </div>
  )
}

export default LoginComponent

