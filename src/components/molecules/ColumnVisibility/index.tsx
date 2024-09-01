import React from 'react';
import { ColumnDef, flexRender, HeaderContext, Table } from '@tanstack/react-table';

function hasAccessorKey<T>(column: ColumnDef<T>): column is ColumnDef<T> & { accessorKey: string } {
  return 'accessorKey' in column;
}

type ColumnVisibilityTogglesProps<T> = {
  columns: ColumnDef<T>[];
  columnVisibility: { [key: string]: boolean };
  handleCheckboxChange: (columnId: string) => void;
  table: Table<T>;
};

function ColumnVisibilityToggles<T>({
  columns,
  columnVisibility,
  handleCheckboxChange,
  table,
}: ColumnVisibilityTogglesProps<T>) {
  return (
    <div className="flex space-x-4 mb-4">
      {columns.map(column => {
        const columnId = column.id || (hasAccessorKey(column) ? column.accessorKey : '');
        if (!columnId) return null;

        return (
          <label key={columnId} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={columnVisibility[columnId]}
              onChange={() => handleCheckboxChange(columnId)}
            />
            <span>
              {typeof column.header === 'function'
                ? flexRender(column.header, {
                    column,
                    table,
                  } as HeaderContext<any, unknown>)
                : column.header}
            </span>
          </label>
        );
      })}
    </div>
  );
}

export default ColumnVisibilityToggles;
