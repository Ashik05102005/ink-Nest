import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slices/wishlistSlice"
import currentUserSlice from "./slices/currentUserSlice"
import cartSlice from './slices/CartSlice'

const store = configureStore({
    reducer : {
        wishlist : wishlistSlice,
        currentUser : currentUserSlice,
        cart : cartSlice 
        
    }
})
export default store