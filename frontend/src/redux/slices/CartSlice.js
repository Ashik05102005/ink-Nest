import { createSlice } from "@reduxjs/toolkit";

const initialState = { items : []}

const CartSlice = createSlice({
    name : "cart" , 
    initialState , 
    reducers : {
        setCart (state,action){
            state.items = action.payload
        },
        addToCart (state,action){
            state.items.push(action.payload)
        },
        removeCart (state,action){
            state.items =state.items.filter(item=>(
                item.id!==action.payload
            ))
        },
        clearCart (state,action){
            state.items=[]
        }
    }
})

export const {setCart , addToCart , removeCart , clearCart} = CartSlice.actions;
export default CartSlice.reducer;