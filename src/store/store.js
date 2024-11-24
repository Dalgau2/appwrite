import { configureStore } from "@reduxjs/toolkit";
import { authReducer,login,logout } from "../slices/authslice";
const store=configureStore({
    reducer:{
        authReducer
    }
})

export  {store,login,logout}