import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { decrementQuantity, incrementQuantity, removeCart } from '../../redux/slices/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateCart } from '../../hooks/useUpdateCart';


function CartCard({book}) {
    const dispatch = useDispatch();
    const cart = useSelector(state=>state.cart.items);
    const currentUser = useSelector(state=>state.currentUser.currentUser);
    const updateCartMutation = useUpdateCart()

    const handleRemoveCart=(id)=>{
        dispatch(removeCart(id))

        const updatedCart = cart.filter(
            (book)=>book.id!==id);
        
        updateCartMutation.mutate({
            userId:currentUser.id ,
            cart : updatedCart
        })

    }

    const handleIncrementQuantity = (id)=>{
        dispatch(incrementQuantity(id));
        const updatedCart= cart.map(item=>
            item.id ===id 
                ?{...item , quantity : item.quantity + 1}
                :item
        )
        updateCartMutation.mutate({
            userId:currentUser.id ,
            cart : updatedCart
        })
        
    }

    const handleDecrementQuantity = (id)=>{
        dispatch(decrementQuantity(id));

        const updatedCart= cart.map(item=>
            item.id ===id 
                ?{...item , quantity : item.quantity - 1}
                :item
        )
        updateCartMutation.mutate({
            userId:currentUser.id ,
            cart : updatedCart
        })
    }

  return (
    <div className='border-b border-b-gray-300 min-h-30 p-1 flex justify-between'>
        <div className="p-2 w-8/10  flex gap-2">
            <img 
            className='h-40 w-30'
            src={book.image}></img>
            <div className='p-2 flex flex-col gap-2'>
                <h1 className='font-medium'>{book.title}</h1>
                <h1 className=''>{book.author}</h1>
                <h1 className=''>Rs {book.price}</h1>
                <div className='flex '>
                    <button 
                    onClick={()=>handleDecrementQuantity(book.id)}
                    className='border px-2 rounded-l-md border-gray-400 '>-</button>
                    <span className='border px-2  border-gray-400'>{book.quantity}</span>
                    <button 
                    onClick={()=>handleIncrementQuantity(book.id)}
                    className='border px-2 rounded-r-md border-gray-400'>+</button>
                </div>
            </div>
        </div>
        <div className=" flex items-end text-xl pb-7"><RiDeleteBin6Line 
        onClick={()=>handleRemoveCart(book.id)}
        className='border w-7 h-7 p-1 rounded border-rose-300 text-rose-500'/></div>
    </div>
  )
}

export default CartCard