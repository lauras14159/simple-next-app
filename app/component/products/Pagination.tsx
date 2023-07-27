export type PaginationParameters = {
  startFrom: number;
  endAt: number;
  totalLength: number;
  increment: () => void;
  decrement: () => void;
  isDisabled: boolean;
};

export function Pagination({
  startFrom,
  endAt,
  totalLength,
  increment,
  decrement,
  isDisabled = false,
}: PaginationParameters) {
  return (
    <div className="gap-x-5 flex flex-row">
      <div>
        <span>
          Showing {startFrom}-{endAt} of {totalLength}
        </span>
      </div>
      <div className="gap-x-2 flex flex-row">
        <div>
          <button onClick={decrement} disabled={isDisabled}>
            {'<'}
          </button>
        </div>
        <div>
          <button onClick={increment} disabled={isDisabled}>
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
}
