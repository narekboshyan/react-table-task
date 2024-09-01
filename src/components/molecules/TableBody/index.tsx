import { Row } from "@tanstack/react-table";
import TableRow from "../TableRow";

type TableBodyProps<T> = {
  rows: Row<T>[];
};

function TableBody<T>({ rows }: TableBodyProps<T>) {
  return (
    <tbody>
      {rows.map((row) => (
        <TableRow key={row.id} row={row} />
      ))}
    </tbody>
  );
}

export default TableBody;
