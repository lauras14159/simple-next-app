import { selectShop, useAppDispatch, useAppSelector } from "@/lib/Providers";
import { type Category, fetchCategories } from "@/lib/shopClient";
import { type ChangeEvent, useEffect, useState } from "react"

export type CategoryFilterParameters = {
    onChange: (e: ChangeEvent<HTMLSelectElement>) => Promise<void>;
}

export function CategoryFilter({ onChange }: CategoryFilterParameters) {
    const { categories } = useAppSelector(selectShop),
        dispatch = useAppDispatch();
    console.log()
    useEffect(() => {
        dispatch(fetchCategories())
    }, [])
    return <select onChange={onChange}>
        <option>none</option>
        {categories.map(category =>
            <option key={category}>{category}</option>
        )}
    </select>
}