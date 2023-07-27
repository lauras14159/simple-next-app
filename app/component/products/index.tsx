'use client';

import { SortType, fetchProducts } from "@/lib/shopClient";
import { Pagination } from "./Pagination";
import { ProductsTable } from "./Products";
import { CategoryFilter } from "./filter/Category";
import { SortFilter } from "./filter/Sort";
import { type ChangeEvent, useEffect, useState } from "react";
import { selectShop, useAppDispatch, useAppSelector } from "@/lib/Providers";

export type DataType = {
    productsIndexStartFrom: number;
    defaultProductsCountPerPage: number;
    categoryFilterSelectedOption: string;
    sortFilterSelectedOption: SortType;
}


export function Index() {
    const { categories, products } = useAppSelector(selectShop),
        dispatch = useAppDispatch();
    const [data, setData] = useState<DataType>({
        productsIndexStartFrom: 0,
        defaultProductsCountPerPage: 8,
        categoryFilterSelectedOption: 'none',
        sortFilterSelectedOption: SortType.Ascending,
    });
    useEffect(() => {
        dispatch(fetchProducts({ category: data.categoryFilterSelectedOption, sortType: data.sortFilterSelectedOption }))
    }, [])
    async function categoryFilterOnChange(e: ChangeEvent<HTMLSelectElement>) {
        dispatch(fetchProducts({ category: e.target.value, sortType: data.sortFilterSelectedOption }))
        setData({
            ...data,
            productsIndexStartFrom: 0,
            categoryFilterSelectedOption: e.target.value,
        })

    }
    async function sortFilterOnChange(e: ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value as keyof typeof SortType;
        dispatch(fetchProducts({ category: data.categoryFilterSelectedOption, sortType: SortType[value] }))
        setData({
            ...data,
            productsIndexStartFrom: 0,
            sortFilterSelectedOption: SortType[value],
        })
    }
    function increment() {
        const isListEnd = (products.length - (data.productsIndexStartFrom + data.defaultProductsCountPerPage)) <= 0;
        setData({
            ...data,
            productsIndexStartFrom: isListEnd ? 0 : (data.productsIndexStartFrom + data.defaultProductsCountPerPage),
        })
    }
    function decrement() {
        const isListBeginning = data.productsIndexStartFrom === 0,
            remainder = products.length % data.defaultProductsCountPerPage;
        let productsIndexStartFrom = 0;
        if (isListBeginning && remainder > 0) {
            console.log(1);
            productsIndexStartFrom = products.length - remainder;
        }
        else {
            productsIndexStartFrom = (data.productsIndexStartFrom - data.defaultProductsCountPerPage)
        }
        setData({
            ...data,
            productsIndexStartFrom,
        })
    }
    return <div>
        <CategoryFilter onChange={categoryFilterOnChange} />
        <SortFilter onChange={sortFilterOnChange} />
        <ProductsTable products={products.slice(data.productsIndexStartFrom, data.productsIndexStartFrom + data.defaultProductsCountPerPage)} />
        <Pagination startFrom={data.productsIndexStartFrom + 1} endAt={data.productsIndexStartFrom + data.defaultProductsCountPerPage > products.length ? products.length : data.productsIndexStartFrom + data.defaultProductsCountPerPage} totalLength={products.length} increment={increment} decrement={decrement} isDisabled={products.length < data.defaultProductsCountPerPage} />
    </div>
}