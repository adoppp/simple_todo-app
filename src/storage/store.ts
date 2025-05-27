import { configureStore } from "@reduxjs/toolkit";
import { modalReducer, todoReducer } from "@/storage/reducers";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        modal: modalReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;