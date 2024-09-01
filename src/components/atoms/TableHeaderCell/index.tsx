import { Header } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import ArrowDown from '@/public/arrow_down.svg';
import ArrowUp from '@/public/arrow_up.svg';

type TableHeaderCellProps<T> = {
  header: Header<T, unknown>;
};

function TableHeaderCell<T>({ header }: TableHeaderCellProps<T>) {
  return (
    <th
      colSpan={header.colSpan}
      className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300 relative h-16 pl-3"
      style={{ width: header.getSize() }}>
      {!header.isPlaceholder && (
        <div
          className={
            header.column.getCanSort()
              ? 'cursor-pointer select-none flex items-center'
              : 'flex items-center'
          }
          onClick={header.column.getToggleSortingHandler()}>
          {flexRender(header.column.columnDef.header, header.getContext())}
          {{
            asc: <ArrowUp />,
            desc: <ArrowDown />,
          }[header.column.getIsSorted() as string] ?? null}
        </div>
      )}
      <div
        onMouseDown={header.getResizeHandler()}
        onTouchStart={header.getResizeHandler()}
        className="resizer h-full absolute right-0 top-0 w-1 bg-gray-500 cursor-col-resize"
      />
    </th>
  );
}

export default TableHeaderCell;
