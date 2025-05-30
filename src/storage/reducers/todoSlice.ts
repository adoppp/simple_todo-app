import { createSlice } from "@reduxjs/toolkit";

import { addTodo, deleteTodo, getTodos, toggleComplited } from "@/storage/operations";
import type { Todo } from "@/constants/globalConstants";

interface TodoState {
    list: Todo[];
}

const initialState: TodoState = {
    list: [],
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTodos.fulfilled, (state, action) => {
            state.list = action.payload;
        })
        .addCase(addTodo.fulfilled, (state, action) => {
            state.list.push(action.payload);
        })
        .addCase(deleteTodo.fulfilled, (state, action) => {
            const findTodo = state.list.filter(todo => todo.id !== action.payload.id);
            state.list = findTodo;
        })
        .addCase(toggleComplited.fulfilled, (state, action) => {
            const todo = state.list.find(todo => todo.id === action.payload.id)
            if (todo) {
                todo.isCompleted = !todo.isCompleted;
            }
        })
    },
});

export const todoReducer = todoSlice.reducer;