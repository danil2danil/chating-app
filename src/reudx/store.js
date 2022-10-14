import { configureStore } from "@reduxjs/toolkit";
import profileReduser from './profile'
 
export const store = configureStore({
    reducer:{
        user: profileReduser,
    }
})