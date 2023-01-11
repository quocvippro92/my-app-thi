import { configureStore } from "@reduxjs/toolkit"
import { todoListReducer } from "../slice/createrSlice"



const rootReducer = {
    todoListReducer:todoListReducer,
}

export const rootStored = configureStore({
    reducer:rootReducer,
})