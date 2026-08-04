import React, { useState } from 'react'
import LoginComponent from '../components/Authentication/LoginComponent'
import LoginBanner from '../assets/Login/LoginBanner.png'
import RegisterComponent from '../components/Authentication/RegisterComponent'


function Login() {
    const [isLogin , setIsLogin]=useState(true)
  return (
    <div className='flex max-h-screen h-screen '>
        <div className='min-w-1/2 hidden md:block'>
            <img 
            className='h-full'
            src={LoginBanner} alt='Login Banner'></img>
        </div>

       {
        isLogin===true?<LoginComponent  isLogin={isLogin}  setIsLogin={setIsLogin}/> :
       <RegisterComponent isLogin={isLogin}  setIsLogin={setIsLogin} />}
    </div>
  )
}

export default Login