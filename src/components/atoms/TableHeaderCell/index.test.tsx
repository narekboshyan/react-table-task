import { Header } from '@tanstack/react-table';
import { render, screen } from '@testing-library/react';
import TableHeaderCell from './';

jest.mock('@/public/arrow_down.svg', () => 'ArrowDown');
jest.mock('@/public/arrow_up.svg', () => 'ArrowUp');

test('renders the header text correctly', () => {
  const mockHeader = {
    colSpan: 1,
    getSize: jest.fn().mockReturnValue('100px'),
    isPlaceholder: false,
    column: {
      getCanSort: jest.fn().mockReturnValue(true),
      getToggleSortingHandler: jest.fn(),
      getIsSorted: jest.fn().mockReturnValue('asc'),
      columnDef: {
        header: 'Product Name',
      },
    },
    getContext: jest.fn(),
    getResizeHandler: jest.fn(),
  } as unknown as Header<unknown, unknown>;

  render(<TableHeaderCell header={mockHeader} />);

  expect(screen.getByText('Product Name')).toBeInTheDocument();
});
