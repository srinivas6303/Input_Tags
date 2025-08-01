import { configureStore } from "@reduxjs/toolkit";
import tagReducer from './Tag_Slice'
export const Store = configureStore({
    reducer:{
        tag:tagReducer
    }
})