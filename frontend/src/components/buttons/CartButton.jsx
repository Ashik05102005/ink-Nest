import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addToCart } from '../../redux/slices/CartSlice';
import { useUpdateCart } from '../../hooks/useUpdateCart';

function CartButton({book}) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state=>state.cart.items);
  const updateCartMutation = useUpdateCart();
  const currentUser = useSelector(state=>state.currentUser.currentUser)
  // console.log(cartItems)

  const handleAddToCart = (e)=>{
    e.stopPropagation();
    const existingItem = cartItems.find(
                item=>item.id === book.id);

    if(!existingItem){
      dispatch(addToCart(book));

      const updatedCart = [...cartItems , {...book,quantity:1}];

      updateCartMutation.mutate({
        userId : currentUser.id,
        cart : updatedCart
      })
    }
    
  }

  return (
    <div className='w-full '>
        <button 
        type='button'
        onClick={handleAddToCart}
        className='border px-2 py-1 rounded text-[#1D7A46] w-full hover:bg-[#1D7A46]/5 hover:backdrop-blur-md '>Add To Cart</button>
    </div>
  )
}

export default CartButton;