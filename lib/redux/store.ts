import { configureStore } from "@reduxjs/toolkit";
import { shopSlice } from "./shopSlice";

export const appStore = configureStore({
    reducer: {
        shop: shopSlice.reducer,
    }
});