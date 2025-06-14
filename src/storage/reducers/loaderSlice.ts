import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, editTask, getTodos, toggleComplited } from "@/storage/operations/todoThunk";
import { setPending } from "@/storage/reducers/loaderSlice.constants";

export interface loaderState {
    loading: boolean;
    loadingGet: boolean;
};

const initialState: loaderState = {
    loading: false,
    loadingGet: false,
};

const loaderSlice = createSlice({
    name: "loader",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTodos.pending, setPending("loadingGet"));
        builder.addMatcher(
            isAnyOf(
                addTodo.pending,
                deleteTodo.pending,
                toggleComplited.pending,
                editTask.pending
            ),
            setPending("loading")
        );
        builder.addMatcher(
            isAnyOf(
                getTodos.fulfilled,
                getTodos.rejected,
                addTodo.fulfilled,
                addTodo.rejected,
                deleteTodo.fulfilled,
                deleteTodo.rejected,
                toggleComplited.fulfilled,
                toggleComplited.rejected,
                editTask.fulfilled,
                editTask.rejected
            ),
            (state) => {
                state.loading = false;
                state.loadingGet = false;
            }
        );
    }
});

export const loaderReducer = loaderSlice.reducer;
