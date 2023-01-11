import { createSlice } from "@reduxjs/toolkit";
import { LocalStorage } from "../localStore/LocalStorage";


const {get,set} = LocalStorage("todoList",[])
const initialState = {
    list:get(),
}

const todoSlice = createSlice(
    {
        name:"todoList",
        initialState:initialState,
        reducers:{
            submitTodoList:(state,action)=>{
                const data = action.payload;
                state.list = [data,...state.list]
                set(state.list)
            },
            deleteTodoList:(state,action)=>{
                const oldList = [...state.list];
                const willDeleteItem = action.payload;
                const itemIndex = oldList.indexOf((item) => item.code === willDeleteItem.code);
                oldList.splice(itemIndex,1);
                state.list = oldList;
            }
        }
    }
)

export const {submitTodoList,deleteTodoList}=todoSlice.actions;
export const todoListReducer = todoSlice.reducer