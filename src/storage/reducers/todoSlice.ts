import { createSlice } from "@reduxjs/toolkit";

import { getTodos } from "@/storage/operations/todoThunk";

interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

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
    },
})

export const todoReducer = todoSlice.reducer;