// const { createSlice } = require("@reduxjs/toolkit");

import { createSlice } from "@reduxjs/toolkit"

const initialState ={ items : [] }

const wishlistSlice = createSlice({
    name : "wishlist",
    initialState ,
    reducers : {
        //to set wishlist from db after login
        setWishlist(state,action){
            state.items = action.payload
        },
        //add a new book
        addWishlist(state,action){
            state.items.push(action.payload)
        },

        removeWishlist(state,action){
            state.items = state.items.filter(item=>(
                item.id!==action.payload
            ))
        },

        clearWishlist(state){
            state.items=[]
        }
    }
})

export const {setWishlist , addWishlist , removeWishlist ,clearWishlist} = wishlistSlice.actions;
export  default wishlistSlice.reducer