// yaha todos ke function likhe jaenge

import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "Todos",
    initialState: {
        todosArray: []
    },
    reducers: {
        addTodo: (state , action) => {
            // state ka matlb initial state
            state.todosArray.push({
                title: action.payload.inputValue,
                id: nanoid()
            })
        },
        removeTodo: (state , action) =>{
            state.todosArray.splice(action.payload.index , 1)
        }
    }
})



export const { addTodo , removeTodo } = todoSlice.actions
export default todoSlice.reducer