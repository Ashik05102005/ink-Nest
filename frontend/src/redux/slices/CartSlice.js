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
                    const book =action.payload;
                    state.items.push({...book, quantity : 1})
                
        },
        incrementQuantity (state,action){
            const item = state.items.find(
                item=>item.id===action.payload
            )
            if(item.quantity<item.stock){
                item.quantity += 1;
            }
        },
        decrementQuantity (state,action){
            const item = state.items.find(
                item=>item.id===action.payload
            );
            if(item.quantity>1){
                item.quantity -=1;
            }
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

export const {setCart , addToCart , removeCart , clearCart , incrementQuantity ,decrementQuantity} = CartSlice.actions;
export default CartSlice.reducer;