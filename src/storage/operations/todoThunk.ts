import type { Todo } from "@/constants/globalConstants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance, REJECTED } from "@storage/operations/constants";
import { nanoid } from "nanoid";

export const getTodos = createAsyncThunk(
    "todo/getTodos",
    async (_, thunkAPI) => {
        try {
            const response = await instance.get("todos");

            return response.data;
        } catch (e) {
            return REJECTED(thunkAPI, e);
        }
    }
);

export const addTodo = createAsyncThunk(
    "todo/addTodo",
    async (title: string, thunkAPI) => {
        try {
            const response = await instance.post("todos", {
                id: nanoid(),
                title: title,
                isComplited: false
            });

            return response.data;
        } catch (e) {
            return REJECTED(thunkAPI, e);
        }
    }
);

export const deleteTodo = createAsyncThunk(
    "todo/deleteTodo",
    async (id: string, thunkAPI) => {
        try {
            const response = await instance.delete(`todos/${id}`);

            return response.data;
        } catch (e) {
            return REJECTED(thunkAPI, e);
        }
    }
);

export const toggleComplited = createAsyncThunk(
    "todo/toggleComplite",
    async (data: Todo, thunkAPI) => {
        try {
            const response = await instance.put(`todos/${data.id}`, data);

            return response.data;
        } catch (e) {
            return REJECTED(thunkAPI, e);
        }
    }
);