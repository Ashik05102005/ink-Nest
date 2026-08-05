import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser : null
}

const currentUserSlice = createSlice({
    name : "currentUser",
    initialState ,
    reducers :{
        setCurrentUser (state,action){
            state.currentUser = action.payload
        },

        logout (state){
            state.currentUser =  null
        }
    }
})

export const {setCurrentUser , logout}=currentUserSlice.actions;
export default currentUserSlice.reducer;