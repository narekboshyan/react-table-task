import { Cell } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";

type TableCellProps<T> = {
  cell: Cell<T, unknown>;
};

function TableCell<T>({ cell }: TableCellProps<T>) {
  return (
    <td
      className="p-3 text-sm text-gray-700 whitespace-nowrap border border-gray-300"
      style={{ width: cell.column.getSize() }}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  );
}

export default TableCell;
