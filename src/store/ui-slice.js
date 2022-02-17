import { createSlice } from "@reduxjs/toolkit";
import { fetchCartData, sendCartData } from "./cart-action";

const uiSlice = createSlice({
    name: "ui",
    initialState: { cartIsVisible: false, notification: null },
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
    },
    extraReducers: {
        [fetchCartData.rejected]: (state, action) => {
            state.notification = {
                status: "error",
                title: "Error!",
                message: action.error.message || "Fetching cart data failed.",
            };
        },
        [sendCartData.pending]: (state, action) => {
            state.notification = {
                status: "pending",
                title: "Sending...",
                message: "Sending Cart Data...",
            };
        },
        [sendCartData.fulfilled]: (state, action) => {
            state.notification = {
                status: "success",
                title: "Success!",
                message: "Sent cart data Successfully!",
            };
        },
        [sendCartData.rejected]: (state, action) => {
            state.notification = {
                status: "error",
                title: "Error!",
                message: action.error.message,
            };
        },
    },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
