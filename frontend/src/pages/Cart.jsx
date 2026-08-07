import React, { useEffect } from 'react'
import NavBar from '../components/Home/NavBar'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import CartButton from '../components/buttons/CartButton';
import CartCard from '../components/Cards/CartCard';
import { SlLock } from "react-icons/sl";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { setCart } from '../redux/slices/CartSlice';
import { useCurrentUser } from '../hooks/useCurrentUser';
import { setCurrentUser } from '../redux/slices/currentUserSlice';
import EmptyCart from '../components/emptyComponents/emptyCart';


function Cart() {
    const cart = useSelector(state => state.cart.items);
    const id = JSON.parse(localStorage.getItem("userId"));
    const {data:user , isLoading , error} = useCurrentUser(id);
    
    const dispatch = useDispatch();
    useEffect(()=>{
        if(user){
            dispatch(setCurrentUser(user))
            dispatch(setCart(user.cart))
        }
        
    },[user,dispatch])
    if(isLoading) return<h1>Loading ...</h1>
    if(error) return <h1>Error....</h1>
    const totalPrice = cart.reduce((total,book)=>(total+=book.price*book.quantity),0);
    // console.log(totalprice)

    return (
        <div className='bg-[#F8F6F1] min-h-screen'>
            <NavBar />

            {   cart.length==0
                ?<div className='pt-20'>
                    <EmptyCart />
                </div>
                :<div className='pt-20  min-h-100 flex md:flex-row flex-col'>
                
                    <div className="md:w-3/4 w-full p-5 ">
                        <div className=''>
                            <div>
                                <h1 className='text-3xl font-medium '>My Cart</h1>
                                <p className='text-[#1D7A46] mt-3'>{cart.length} items in your cart</p>
                            </div>
                        </div>
                        <div className='bg-white p-3 mt-4 rounded-xl shadow-md'>
                            {
                                cart.map((book) => (
                                    <CartCard 
                                    key={book.id}
                                    book={book} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="md:w-1/4  w-90 p-5 md:pt-20">
                        <div className=' p-4  bg-white  shadow rounded-xl '>
                            <h1 className='font-medium'>Order Summery</h1>
                            <div className='flex justify-between pr-3'>
                                <span>total</span>
                                <span>{totalPrice}</span>
                            </div>
                            <button className='border w-full py-2 lg:mt-5 mt-3 rounded-md text-white bg-[#1D7A46] flex items-center justify-center gap-2'><SlLock /> Proceed to checkOut</button>
                            <button className='border w-full py-2 lg:mt-5 mt-3 rounded-md  text-[#1D7A46] flex items-center justify-center gap-2' > <HiOutlineShoppingBag /> Buy Now</button>
                        </div>
                    </div>
            </div>
            }
        </div>
    )
}

export default Cart