import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: { items: [], totalQuantity: 0 },
    reducers: {
        addItemToCart(state, action) {
            state.totalQuantity++;
            const newItem = action.payload.item;
            const existingItem = state.items.find(
                (item) => item.id === newItem.id
            );
            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.totalPrice += newItem.price;
            } else {
                state.items.push({
                    id: newItem.id,
                    name: newItem.title,
                    quantity: 1,
                    price: newItem.price,
                    totalPrice: newItem.price,
                });
            }
        },
        removeItemFromCart(state, action) {
            state.totalQuantity--;
            const id = action.payload.id;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity -= 1;
                existingItem.totalPrice -= existingItem.price;
            }
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
