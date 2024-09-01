import { Cell } from '@tanstack/react-table';
import '@testing-library/jest-dom';
import { flexRender } from '@tanstack/react-table';
import { render, screen } from '@testing-library/react';
import TableCell from '.';

jest.mock('@tanstack/react-table', () => ({
  ...jest.requireActual('@tanstack/react-table'),
  flexRender: jest.fn(),
}));

describe('TableCell Component', () => {
  const mockCell: Cell<any, unknown> = {
    column: {
      columnDef: { cell: 'Sample Content' },
      getSize: jest.fn().mockReturnValue(150),
    },
    getContext: jest.fn().mockReturnValue('Context Data'),
  } as any;

  beforeEach(() => {
    (flexRender as jest.Mock).mockImplementation(cellContent => <span>{cellContent}</span>);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the cell with the correct content', () => {
    render(<TableCell cell={mockCell} />);

    expect(flexRender).toHaveBeenCalledWith('Sample Content', 'Context Data');
    expect(screen.getByText('Sample Content')).toBeInTheDocument();
  });

  test('applies correct styling and attributes', () => {
    render(<TableCell cell={mockCell} />);

    const tdElement = screen.getByText('Sample Content').closest('td');
    expect(tdElement).toHaveClass(
      'p-3 text-sm text-gray-700 whitespace-nowrap border border-gray-300',
    );
    expect(tdElement).toHaveStyle({ width: '150px' });
  });

  test('calls cell.column.getSize() correctly', () => {
    render(<TableCell cell={mockCell} />);

    expect(mockCell.column.getSize).toHaveBeenCalledTimes(1);
  });

  test('renders with a dynamic cell content based on context', () => {
    const dynamicMockCell: Cell<any, unknown> = {
      column: {
        columnDef: { cell: (ctx: any) => `Dynamic Content: ${ctx}` },
        getSize: jest.fn().mockReturnValue(200),
      },
      getContext: jest.fn().mockReturnValue('Dynamic Context'),
    } as any;

    (flexRender as jest.Mock).mockImplementation((cellContent, context) => (
      <span>{cellContent(context)}</span>
    ));

    render(<TableCell cell={dynamicMockCell} />);

    expect(screen.getByText('Dynamic Content: Dynamic Context')).toBeInTheDocument();
  });
});
