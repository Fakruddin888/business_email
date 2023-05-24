import { configureStore } from "@reduxjs/toolkit";
import mailReducre from '../features/mailSlice'

export const store =configureStore({
    reducer:{
        mail:mailReducre,
    },
})