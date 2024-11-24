import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userData:null,
    status:false
}

const authSlice=createSlice({
    name:"auth",
    initialState,

    reducers:{
        login(state,action){
            state.userData=action.payload.userData,
            state.status=true
        },
        // logout reducer
        logout(state){
            state.status=false
            state.userData=null
        }

        // home work make an slice of post 

    }
})

export const {login,logout}=authSlice.actions

export const authReducer=authSlice.reducer
