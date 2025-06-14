import { configureStore } from "@reduxjs/toolkit";
import { todoReducer, loaderReducer } from "@/storage/reducers";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        loader: loaderReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;