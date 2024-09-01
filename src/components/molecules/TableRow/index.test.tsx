import { Cell, Row } from '@tanstack/react-table';
import { render, screen } from '@testing-library/react';
import TableCell from '../../atoms/TableCell';
import TableRow from './';

jest.mock('../../atoms/TableCell', () => jest.fn(() => <td data-testid="table-cell" />));

describe('TableRow Component', () => {
  const mockCells: Cell<any, any>[] = [
    { id: 'cell-1', column: {}, row: {}, getContext: jest.fn() } as any,
    { id: 'cell-2', column: {}, row: {}, getContext: jest.fn() } as any,
  ];

  const mockRow: Row<any> = {
    id: 'row-1',
    getVisibleCells: jest.fn(() => mockCells),
  } as any;

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders a tr element with the correct class', () => {
    render(<TableRow row={mockRow} />);
    const trElement = screen.getByRole('row');
    expect(trElement).toBeInTheDocument();
    expect(trElement).toHaveClass('border-b border-gray-300');
  });

  test('renders the correct number of TableCell components', () => {
    render(<TableRow row={mockRow} />);
    const tableCells = screen.getAllByTestId('table-cell');
    expect(tableCells.length).toBe(2); // Should match the number of visible cells
  });

  test('passes the correct cell props to each TableCell component', () => {
    render(<TableRow row={mockRow} />);
    expect(TableCell).toHaveBeenCalledTimes(2);
    expect(TableCell).toHaveBeenCalledWith(
      expect.objectContaining({
        cell: mockCells[0],
      }),
      {},
    );
    expect(TableCell).toHaveBeenCalledWith(
      expect.objectContaining({
        cell: mockCells[1],
      }),
      {},
    );
  });

  test('renders no TableCell components when there are no visible cells', () => {
    (mockRow.getVisibleCells as unknown as jest.Mock).mockReturnValue([]);
    render(<TableRow row={mockRow} />);
    const tableCells = screen.queryAllByTestId('table-cell');
    expect(tableCells.length).toBe(0);
  });
});
