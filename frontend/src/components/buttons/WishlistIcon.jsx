import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addWishlist, removeWishlist } from '../../redux/slices/wishlistSlice';
import { useUpadateWishlist } from '../../hooks/useUpadteWishlist';
import { useNavigate } from 'react-router-dom';


function WishlistIcon({book}) {
  const dispatch = useDispatch()
  const wishlist = useSelector(state=>state.wishlist.items);
  const isWishlisted = wishlist.some(item=>item.id === book.id);
  const currentUser = useSelector(state=>state.currentUser.currentUser);
  const userId = JSON.parse(localStorage.getItem("userId"));
  const userRole = JSON.parse(localStorage.getItem("userRole"));
  const navigate = useNavigate();
  
  const handleAddWishlist = (e)=>{
    e.stopPropagation();
    if(!userId) {
      navigate('/login')
    }
    if(userRole==="admin"){
      return
    }
    dispatch(addWishlist(book))
    
    const updatedWishList = [...wishlist , book];

    updateWishlistMutation.mutate({
      userId : currentUser.id ,
      wishlist : updatedWishList
    })

    console.log("Mutation called"); 
    


  }
   const handleRemoveWishlist = ()=>{
    dispatch(removeWishlist(book.id))

    const updatedWishList = wishlist.filter(
      item =>item.id!==book.id
    );

    updateWishlistMutation.mutate({
      userId : currentUser.id ,
      wishlist : updatedWishList
    })

  console.log("Mutation called");  
  
  }

  const updateWishlistMutation = useUpadateWishlist();
  // console.log(wishlist)
  return (
    <div>
      {isWishlisted ?<FaHeart 
                        className='cursor-pointer text-rose-500 text-xl hover:scale-110 transition'
                        onClick={handleRemoveWishlist}/>
                    :<CiHeart 
                        className='cursor-pointer text-rose-500 text-xl hover:scale-110 transition '
                        onClick={handleAddWishlist}/>}
    </div>
   )
}

export default WishlistIcon