import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "@storage/operations/constants";

const REJECTED = (thunkAPI: any, e: any) =>
    thunkAPI.rejectWithValue(
        e.response.data.message ? e.response.data.message : e.message,
);

export const getTodos = createAsyncThunk(
    "todo/getTodos",
    async (_, thunkAPI) => {
        try {
            const response = await instance.get("/todos");

            return response.data;
        } catch (e) {
            return REJECTED(thunkAPI, e);
        }
    }
);