import React from 'react';
import { ColumnDef, Table } from '@tanstack/react-table';
import { fireEvent, render, screen } from '@testing-library/react';
import ColumnVisibilityToggles from './';

describe('ColumnVisibilityToggles', () => {
  const mockHandleCheckboxChange = jest.fn();

  const mockTable = {} as Table<any>; // Mock table object

  const columns: ColumnDef<any>[] = [
    { id: 'name', header: 'Name' },
    { accessorKey: 'age', header: 'Age' },
    { accessorKey: 'address', header: () => 'Address' }, // Function header
    { header: 'No ID or Accessor' }, // Should not render
  ];

  const columnVisibility = {
    name: true,
    age: false,
    address: true,
  };

  beforeEach(() => {
    mockHandleCheckboxChange.mockClear();
  });

  test('renders the component with correct checkboxes', () => {
    render(
      <ColumnVisibilityToggles
        columns={columns}
        columnVisibility={columnVisibility}
        handleCheckboxChange={mockHandleCheckboxChange}
        table={mockTable}
      />,
    );

    // Check that the correct checkboxes are rendered
    const nameCheckbox = screen.getByLabelText('Name');
    const ageCheckbox = screen.getByLabelText('Age');
    const addressCheckbox = screen.getByLabelText('Address');

    expect(nameCheckbox).toBeInTheDocument();
    expect(nameCheckbox).toBeChecked();

    expect(ageCheckbox).toBeInTheDocument();
    expect(ageCheckbox).not.toBeChecked();

    expect(addressCheckbox).toBeInTheDocument();
    expect(addressCheckbox).toBeChecked();
  });

  test('handles checkbox changes correctly', () => {
    render(
      <ColumnVisibilityToggles
        columns={columns}
        columnVisibility={columnVisibility}
        handleCheckboxChange={mockHandleCheckboxChange}
        table={mockTable}
      />,
    );

    const nameCheckbox = screen.getByLabelText('Name');
    fireEvent.click(nameCheckbox);

    expect(mockHandleCheckboxChange).toHaveBeenCalledWith('name');
  });

  test('does not render checkboxes for columns without an id or accessorKey', () => {
    render(
      <ColumnVisibilityToggles
        columns={columns}
        columnVisibility={columnVisibility}
        handleCheckboxChange={mockHandleCheckboxChange}
        table={mockTable}
      />,
    );

    const noIdCheckbox = screen.queryByLabelText('No ID or Accessor');
    expect(noIdCheckbox).not.toBeInTheDocument();
  });

  test('renders column headers correctly', () => {
    render(
      <ColumnVisibilityToggles
        columns={columns}
        columnVisibility={columnVisibility}
        handleCheckboxChange={mockHandleCheckboxChange}
        table={mockTable}
      />,
    );

    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Age')).toBeInTheDocument();
    expect(screen.getByLabelText('Address')).toBeInTheDocument();
  });
});
