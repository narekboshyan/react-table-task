import { Row } from '@tanstack/react-table';
import { render, screen } from '@testing-library/react';
import TableRow from '../TableRow';
import TableBody from './';

jest.mock('../TableRow', () => jest.fn(() => <tr data-testid="table-row" />));

describe('TableBody Component', () => {
  const mockRows: Row<any>[] = [
    { id: 'row-1', getVisibleCells: jest.fn() } as any,
    { id: 'row-2', getVisibleCells: jest.fn() } as any,
  ];

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders a tbody element', () => {
    render(<TableBody rows={mockRows} />);
    const tbodyElement = screen.getByRole('rowgroup');
    expect(tbodyElement).toBeInTheDocument();
  });

  test('renders the correct number of TableRow components', () => {
    render(<TableBody rows={mockRows} />);
    const tableRows = screen.getAllByTestId('table-row');
    expect(tableRows.length).toBe(2);
  });

  test('passes the correct row props to TableRow components', () => {
    render(<TableBody rows={mockRows} />);
    expect(TableRow).toHaveBeenCalledTimes(2);
    expect(TableRow).toHaveBeenCalledWith(
      expect.objectContaining({
        row: mockRows[0],
      }),
      {},
    );
    expect(TableRow).toHaveBeenCalledWith(
      expect.objectContaining({
        row: mockRows[1],
      }),
      {},
    );
  });

  test('renders no TableRow components when rows is an empty array', () => {
    render(<TableBody rows={[]} />);
    const tableRows = screen.queryAllByTestId('table-row');
    expect(tableRows.length).toBe(0);
  });
});
