import { useState } from 'react';
import {
  ColumnDef,
  ColumnResizeDirection,
  ColumnResizeMode,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import ColumnVisibilityToggles from '@/components/molecules/ColumnVisibility';
import TableBody from '@/components/molecules/TableBody';
import TableHeader from '@/components/molecules/TableHeader';

function hasAccessorKey<T>(column: ColumnDef<T>): column is ColumnDef<T> & { accessorKey: string } {
  return 'accessorKey' in column;
}

type TableProps<T> = {
  data: T[];
  columns: ColumnDef<T>[];
  columnResizeMode?: ColumnResizeMode;
  columnResizeDirection?: ColumnResizeDirection;
};

function Table<T>({
  columns,
  data,
  columnResizeMode = 'onChange',
  columnResizeDirection = 'ltr',
}: TableProps<T>) {
  const [columnVisibility, setColumnVisibility] = useState<{
    [key: string]: boolean;
  }>(
    columns.reduce(
      (acc, col) => {
        const columnId = col.id || (hasAccessorKey(col) ? col.accessorKey : '');
        if (columnId) {
          acc[columnId] = true;
        }
        return acc;
      },
      {} as { [key: string]: boolean },
    ),
  );

  const table = useReactTable({
    columns,
    data,
    state: {
      columnVisibility,
    },
    onColumnVisibilityChange: setColumnVisibility,
    enableColumnResizing: true,
    columnResizeMode,
    columnResizeDirection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
    initialState: {
      sorting: [
        { id: 'name', desc: false },
        { id: 'price', desc: true },
        { id: 'quality', desc: true },
        { id: 'description', desc: true },
        { id: 'imageUrl', desc: true },
      ],
    },
  });

  const handleCheckboxChange = (columnId: string) => {
    setColumnVisibility(prev => ({
      ...prev,
      [columnId]: !prev[columnId],
    }));
  };

  return (
    <div style={{ direction: table.options.columnResizeDirection }}>
      <div className="flex space-x-4 mb-4">
        <ColumnVisibilityToggles
          columns={columns}
          columnVisibility={columnVisibility}
          handleCheckboxChange={handleCheckboxChange}
          table={table}
        />
      </div>
      <table className="min-w-full border-collapse" style={{ width: table.getCenterTotalSize() }}>
        <TableHeader headerGroups={table.getHeaderGroups()} />
        <TableBody rows={table.getRowModel().rows} />
      </table>
    </div>
  );
}

export default Table;
