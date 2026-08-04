import React, { useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { loginSchema } from "../../Schema/LoginSchema"
import { set } from 'zod';
import { checkEmail } from '../../services/api/authenticationApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';



function LoginComponent({ isLogin, setIsLogin }) {
  // console.log(isLogin)
  const INITIALVALUE = { email: '', password: '' }
  const [input, setInput] = useState(INITIALVALUE)
  const [errors , setErrors] = useState({});
  const navigate = useNavigate()
  const submitHandler = async(e) => {
    e.preventDefault();
    console.log(input);
    const result = loginSchema.safeParse(input);
    if (!result.success) {
      const feildErrors = {};

      result.error.issues.forEach((err) => {
        feildErrors[err.path[0]] = err.message;
      })

      setErrors(feildErrors);
      return;
    }
    
    setErrors({})
    const user = await checkEmail(input.email);
    console.log(user)
    if(user.length>0)
    {
      if(user[0].password===input.password){
        toast.success("Welcome back!" , {duration : 2000});
        localStorage.setItem("userId",JSON.stringify(user[0].id))
        navigate('/')
      }
      else{
         toast.error("Invalid  Password" , {duration : 2000});
         return;
      }
    }
    else{
      toast.error("Invalid Email ",{duration : 2000});
      return;
    }


  }
  return (
    <div className='flex flex-col  justify-center items-center min-h-screen w-full'>

      <div className=' p-4 w-100'>
        <div className='my-3'>
          <h1 className='text-4xl font-serif '>Welcome Back</h1>
          <p className='text-gray-600'>Sign in to continue your reading journey</p>
        </div>
        <form onSubmit={submitHandler}>
          <div className='flex flex-col gap-2'>
            <label
              className='text-gray-900'
            >Email Address</label>
            <div className='w-full relative'>
              <input
                type='text'
                placeholder='Enter Your Email'
                onChange={(e) => setInput(prev => ({ ...prev, email: e.target.value }))}
                className=' px-8 py-2 rounded  focus:outline-1 outline-gray-600 border  border-gray-400 w-full  '
              ></input>
              <div className='absolute  top-0 h-full flex  items-center text-xl p-2 text-gray-400'>
                <MdOutlineEmail />
              </div>
            </div>
              <p className='text-red-500 text-sm'>{errors.email}</p>
            <label
              className='text-gray-900'
              >Password</label>
            <div className='w-full relative ' >
              <input
                type='text'
                placeholder='Enter your password'
                onChange={(e) => setInput(prev => ({ ...prev, password: e.target.value }))}
                className=' px-8 py-2 rounded  focus:outline-1 outline-gray-600 border  border-gray-400 w-full '
                ></input>
              <div className='absolute  top-0 h-full flex  items-center text-xl p-2 text-gray-400'>
                <MdOutlineLock />
              </div>
              <IoEyeOutline className='absolute top-0 right-2  h-full text-xl text-gray-500 ' />
            </div>
                <p className='text-red-500 text-sm'>{errors.password}</p>
            <div className='flex justify-between'>
              <div className='flex gap-2 items-center'>
                <input
                  className='accent-[#1D7A46]'
                  type='checkbox' />
                <label>Remind me</label>
              </div>
              <button className='text-[#1D7A46]'>Forgot Password? </button>
            </div>
            <button className='flex items-center justify-center text-amber-50 bg-[#1D7A46] py-1 text-xl rounded mt-3'>Sign in <IoIosArrowRoundForward className='text-2xl' /> </button>
          </div>

        </form>
        <div className='flex flex-col items-center mt-5'>
          <span>Don't have an account</span>
          <button
            onClick={() => setIsLogin(false)}
            className='flex items-center gap-1 text-[#1D7A46]'>Create account <IoIosArrowRoundForward className='text-xl' /></button>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent