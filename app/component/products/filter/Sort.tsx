import type { ChangeEvent } from "react";

export type SortFilterParameters = {
    onChange: (e: ChangeEvent<HTMLSelectElement>) => Promise<void>;
}


export function SortFilter({ onChange }: SortFilterParameters) {
    return <select onChange={onChange}>
        <option>Ascending</option>
        <option>Descending</option>
    </select>
}