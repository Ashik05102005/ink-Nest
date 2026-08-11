import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slices/wishlistSlice"
import currentUserSlice from "./slices/currentUserSlice"
import cartSlice from './slices/CartSlice'
import orderSlice from './slices/OrderSlice'

const store = configureStore({
    reducer : {
        wishlist : wishlistSlice,
        currentUser : currentUserSlice,
        cart : cartSlice ,
        orders : orderSlice 
    }
})
export default store