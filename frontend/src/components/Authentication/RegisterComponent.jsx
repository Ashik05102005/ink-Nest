import React, { useState } from 'react'
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoLockClosedOutline } from 'react-icons/io5';
import { MdLockOutline } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import {RegisterSchema} from "../../Schema/RegisterSchema"
import { useCreateUser } from '../../hooks/useCreateUser';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { checkEmail } from '../../services/api/authenticationApi';


const INITIALSTATE ={name:'',email:'',password:'',confirm:''}
const ADDITIONALDATA = {cart : [] , wishlist : [] , orders : [] , address : {}}

function RegisterComponent({isLogin , setIsLogin}) {

    const [input , setInput] = useState(INITIALSTATE)
    const [errors ,setErrors] = useState({});
    const createUser=useCreateUser();
    const navigate = useNavigate()

    const submitHandler = async(e)=>{
        e.preventDefault();
        const result = RegisterSchema.safeParse(input);
        if(!result.success){
            const feildErrors = {};
            result.error.issues.forEach(data=>{feildErrors[data.path[0]] = data.message})
            setErrors(feildErrors) 
            return ; 
        }
        const users = await checkEmail(input.email)
        if(users.length>0){
            setErrors((prev)=>({...prev,email :"User exists"}))
            return ; 
        }
        setErrors({});
        
        createUser.mutate({...result.data , ...ADDITIONALDATA })
        navigate('/')
    }


  return (
    <div className='flex min-h-screen max-w-full items-center justify-center w-full'>
        <div className='flex flex-col items-center sm:w-100 w-90'>
            <div className=' w-full my-4 '>
                <h1 className='text-4xl font-serif '>Create Your Account</h1>
                <p className='text-gray-600'>Start your reading journey with InkNest</p>
            </div>
            <div className=' w-full'>
                <form 
                onSubmit={submitHandler}
                className='flex flex-col gap-4'>
                    <div>
                        <label>Full Name</label>
                        <div className='relative mt-1'>
                            <input 
                            type='text'
                            placeholder=' Enter your full name'
                            className=' px-8 py-2 w-full rounded outline outline-gray-400 '
                            onChange={(e)=>setInput((prev)=>({...prev , name : e.target.value}))}
                            ></input>
                            <div className=' absolute top-0 h-full flex items-center p-2 text-xl text-gray-500 '>
                                <CiUser />
                            </div>
                        </div>
                        <p className='text-red-500 mt-2 text-sm'>{errors.name}</p>
                    </div>
                    <div>
                        <label>Email Address</label>
                        <div className='relative mt-1'>
                            <input 
                            type='text'
                            placeholder=' Enter your email'
                            className=' px-8 py-2 w-full rounded outline outline-gray-400'
                            onChange={(e)=>setInput((prev)=>({...prev , email : e.target.value}))}
                            ></input>
                            <div className=' absolute top-0 h-full flex items-center p-2 text-xl text-gray-500'>
                                <CiMail  />
                            </div>
                        </div>
                        <p className='text-red-500 mt-2 text-sm'>{errors.email}</p>
                    </div>
                    <div>
                        <label>Password</label>
                        <div className='relative mt-1 '>
                            <input 
                            type='text'
                            placeholder='Create a password'
                            onChange={(e)=>setInput((prev)=>({...prev , password : e.target.value}))}
                            className=' px-8 py-2 w-full rounded outline outline-gray-400'
                            ></input>
                            <div className=' absolute top-0 h-full flex items-center p-2 text-xl text-gray-500'>
                                <IoLockClosedOutline />
                            </div>
                            <button className='absolute top-0 right-3  h-full text-xl text-gray-500'><IoEyeOutline /></button>
                        </div>
                        <p className='text-red-500 mt-2 text-sm'>{errors.password}</p>
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <div className='relative mt-1'>
                            <input 
                            type='text'
                            placeholder=' confirm password'
                            onChange={(e)=>setInput((prev)=>({...prev , confirm : e.target.value}))}
                            className=' px-8 py-2 w-full rounded outline outline-gray-400'
                            ></input>
                            <div className=' absolute top-0 h-full flex items-center p-2 text-xl text-gray-500'>
                                <IoLockClosedOutline />
                            </div>
                            <button className='absolute top-0 right-3  h-full text-xl text-gray-500'><IoEyeOutline /></button>
                        </div>
                        <p className='text-red-500 mt-2 text-sm'>{errors.confirm}</p>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' className='accent-[#1D7A46]'></input>
                        <p>I agree to the <span className='text-[#1D7A46]'>Terms of Service </span>and <span className='text-[#1D7A46]'>Privacy Policy</span></p>
                    </div>
                    <button className='flex gap-2 items-center justify-center border py-2 rounded-md text-white bg-[#1D7A46]'>Create Account <FaArrowRight /></button>
                </form>
                <div className='mt-5 w-full  flex justify-center gap-1'>
                    <span >Already have an account? </span>   
                    <button 
                    onClick={()=>setIsLogin(true)}
                    className='text-[#1D7A46]'> Sign In</button>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegisterComponent