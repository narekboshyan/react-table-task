import { Row } from "@tanstack/react-table";
import TableCell from "../../atoms/TableCell";

type TableRowProps<T> = {
  row: Row<T>;
};

function TableRow<T>({ row }: TableRowProps<T>) {
  return (
    <tr className="border-b border-gray-300">
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id} cell={cell} />
      ))}
    </tr>
  );
}

export default TableRow;
