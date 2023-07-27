export type PaginationParameters = {
    startFrom: number;
    endAt: number;
    totalLength: number;
    increment: () => void;
    decrement: () => void;
    isDisabled: boolean;
}


export function Pagination({ startFrom, endAt, totalLength, increment, decrement, isDisabled = false }: PaginationParameters) {
    return <div>
        <span>Showing {startFrom}-{endAt} of {totalLength}</span>
        <button onClick={decrement} disabled={isDisabled}>{'<'}</button>
        <button onClick={increment} disabled={isDisabled}>{'>'}</button>
    </div>
}