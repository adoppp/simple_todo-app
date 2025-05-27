import { createSlice } from "@reduxjs/toolkit";

const initialState: { isOpen: boolean } = {
    isOpen: false,
}

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toggleModal(state) {
            state.isOpen = !state.isOpen
        },
    },
});

export const { toggleModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;