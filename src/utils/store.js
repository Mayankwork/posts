
import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import viewpostSlice from "./viewpostSlice";
const store =configureStore({
    reducer:{
        app:appSlice,
        viewpost:viewpostSlice
    
    }
})

export default store