import React, { useEffect } from 'react'
import Navbar from '../../components/Home/NavBar'
import WishlistCards from '../../components/Cards/WishlistCards'
import {useDispatch, useSelector} from 'react-redux'
import { CiHeart } from "react-icons/ci";
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { setCurrentUser } from '../../redux/slices/currentUserSlice';
import { setWishlist } from '../../redux/slices/wishlistSlice';
import EmptyWishlist from '../../components/emptyComponents/EmptyWishlist';


function Wishlist() {
    const id = JSON.parse(localStorage.getItem("userId"))
    const {data:user } = useCurrentUser(id);
    const dispatch = useDispatch()
    useEffect(()=>{
        if(user){
            dispatch(setCurrentUser(user))
            dispatch(setWishlist(user.wishlist))
        }
    },[user,dispatch])
    
    const wishlist = useSelector(state=>state.wishlist.items);
    // console.log(wishlist)
    
  return (
    <div className='bg-[#F8F6F1] min-h-screen'>
        <Navbar />
        {wishlist.length===0
            ?<div className='pt-20'><EmptyWishlist /></div>
            :<div>
                <div className="pt-25 px-2 ">
                    <h1 className='text-3xl font-medium'>My Wishlist</h1>
                    <div className='flex items-center gap-2'>
                        <p className='text-gray-600'>Books you've saved for later   </p>
                        <CiHeart className='text-rose-500'/>
                    </div>

                </div>
                <div className=''>
                    
                    <div className='flex flex-col gap-3 m-2 '>
                        {wishlist.map(book=>(
                            <WishlistCards book = {book}/>
                        ))}
                    </div>
                    
                </div>
            </div>
        }
    </div>
  )
}

export default Wishlist