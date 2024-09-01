import { HeaderGroup } from "@tanstack/react-table";
import TableHeaderCell from "../../atoms/TableHeaderCell";

type TableHeaderProps<T> = {
  headerGroups: HeaderGroup<T>[];
};

function TableHeader<T>({ headerGroups }: TableHeaderProps<T>) {
  return (
    <thead className="bg-gray-50">
      {headerGroups.map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableHeaderCell key={header.id} header={header} />
          ))}
        </tr>
      ))}
    </thead>
  );
}

export default TableHeader;
