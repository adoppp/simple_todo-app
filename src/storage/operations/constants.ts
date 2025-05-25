import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const instance = axios.create({
    baseURL
});

export const REJECTED = (thunkAPI: { rejectWithValue: (value: string) => unknown }, e: any) =>
    thunkAPI.rejectWithValue(
        e.response.data.message ? e.response.data.message : e.message,
);