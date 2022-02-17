import { createAsyncThunk } from "@reduxjs/toolkit";

const FIREBASE_URL = "https://test-e9746-default-rtdb.firebaseio.com";

export const fetchCartData = createAsyncThunk("cart/fetchData", async () => {
    const res = await fetch(`${FIREBASE_URL}/cart.json`);
    if (!res.ok) throw new Error("Fetching cart data failed.");
    return await res.json();
});

export const sendCartData = createAsyncThunk("cart/sendData", async (cart) => {
    const res = await fetch(`${FIREBASE_URL}/cart.json`, {
        method: "PUT",
        body: JSON.stringify(cart),
    });
    if (!res.ok) throw new Error("Sending cart data failed.");
});
