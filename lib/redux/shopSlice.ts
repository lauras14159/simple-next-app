import { createSlice } from "@reduxjs/toolkit";
import { Category, Product, fetchCategories, fetchProducts } from "@/lib/shopClient";
import { useAppDispatch } from "../Providers";

export type initialStateType = {
    products: Product[];
    categories: Category[];
}
export const initialState: initialStateType = {
    products: [],
    categories: [],
}
export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = (action.payload);
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload
            })
    }
})