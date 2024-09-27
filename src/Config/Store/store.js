// yaha global varible bane ga jis ma sara data store hoga
import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../Reducers/todoSlice"; 



export const store = configureStore({
    reducer: {
        todos: todoSlice
    }
})
