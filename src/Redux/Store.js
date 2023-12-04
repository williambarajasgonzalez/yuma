import {configureStore} from "@reduxjs/toolkit";
import {globalPostSlice} from "../Redux/GlobalPostSlice"

export const store = configureStore({
    reducer:{
        globalPost:globalPostSlice.reducer,
    }
})