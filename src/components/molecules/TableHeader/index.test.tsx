import { Header, HeaderGroup } from '@tanstack/react-table';
import { render, screen } from '@testing-library/react';
import TableHeaderCell from '../../atoms/TableHeaderCell';
import TableHeader from './';

jest.mock('../../atoms/TableHeaderCell', () =>
  jest.fn(() => <th data-testid="table-header-cell" />),
);

describe('TableHeader Component', () => {
  const mockHeaders: Header<any, any>[] = [
    { id: 'header-1', isPlaceholder: false, getContext: jest.fn() } as any,
    { id: 'header-2', isPlaceholder: false, getContext: jest.fn() } as any,
  ];

  const mockHeaderGroups: HeaderGroup<any>[] = [
    {
      id: 'group-1',
      headers: mockHeaders,
      getHeaderGroupProps: jest.fn(),
    } as any,
  ];

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders a thead element with the correct class', () => {
    render(<TableHeader headerGroups={mockHeaderGroups} />);
    const theadElement = screen.getByRole('rowgroup');
    expect(theadElement).toBeInTheDocument();
    expect(theadElement).toHaveClass('bg-gray-50');
  });

  test('renders the correct number of rows based on headerGroups', () => {
    render(<TableHeader headerGroups={mockHeaderGroups} />);
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(1); // Should match the number of header groups
  });

  test('renders the correct number of TableHeaderCell components', () => {
    render(<TableHeader headerGroups={mockHeaderGroups} />);
    const headerCells = screen.getAllByTestId('table-header-cell');
    expect(headerCells.length).toBe(2); // Should match the number of headers in the first group
  });

  test('passes the correct header props to TableHeaderCell components', () => {
    render(<TableHeader headerGroups={mockHeaderGroups} />);
    expect(TableHeaderCell).toHaveBeenCalledTimes(2);
    expect(TableHeaderCell).toHaveBeenCalledWith(
      expect.objectContaining({
        header: mockHeaders[0],
      }),
      {},
    );
    expect(TableHeaderCell).toHaveBeenCalledWith(
      expect.objectContaining({
        header: mockHeaders[1],
      }),
      {},
    );
  });

  test('renders no TableHeaderCell components when headerGroups is an empty array', () => {
    render(<TableHeader headerGroups={[]} />);
    const headerCells = screen.queryAllByTestId('table-header-cell');
    expect(headerCells.length).toBe(0);
  });
});
