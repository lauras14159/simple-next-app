import { createAsyncThunk } from "@reduxjs/toolkit";

export type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
}
export enum SortType {
    Ascending = 'asc',
    Descending = 'desc',
}
export type FetchParameters = {
    category: string;
    sortType: SortType;
}
export type Category = string;
export type ProductsFetchParameters = Partial<FetchParameters>;

export const fetchProducts = createAsyncThunk('shop/fetchProducts', async ({ category = 'none', sortType = SortType.Ascending }: ProductsFetchParameters = { category: 'none', sortType: SortType.Ascending }) => {
    const response = await (category === 'none' ? fetch(`https://fakestoreapi.com/products?sort=${sortType}`) : fetch(`https://fakestoreapi.com/products/category/${category}?sort=${sortType}`))
        .then<Product[]>(res => res.json());
    return response;
})

export const fetchCategories = createAsyncThunk('shop/fetchCategories', async () => {
    const response = await fetch('https://fakestoreapi.com/products/categories')
        .then<Category[]>(res => res.json());
    return response;
})