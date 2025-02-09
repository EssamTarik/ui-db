import { vi, describe, it, beforeEach, expect } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import FilterPopover from '..';

vi.mock('../../../Popover', () => ({
  default: ({ children, ...props }: { children: React.ReactNode }) => (
    <div {...props}>{children}</div>
  ),
}));

vi.mock('../../../../hooks/useProductLines', () => ({
  default: () => ({
    'product-line-1': 'line 1',
    'product-line-2': 'line 2',
    'product-line-3': 'line 3',
  }),
}));

const mockSetSearchParams = vi.fn();

vi.mock('react-router', () => ({
  useSearchParams: () => [
    new URLSearchParams({ product_line: 'product-line-1' }),
    mockSetSearchParams,
  ],
  useNavigate: () => vi.fn(),
}));

describe('FilterPopover', () => {
  beforeEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('should render filter popover', async () => {
    const { getByTestId } = render(<FilterPopover onClose={() => {}} />);
    await getByTestId('filter-popover');
  });

  it('should render options', async () => {
    const { getByTestId } = render(<FilterPopover onClose={() => {}} />);
    await getByTestId('product-line-1');
    await getByTestId('product-line-2');
    await getByTestId('product-line-3');
  });

  it('should set search params on check', async () => {
    const { getByTestId } = render(<FilterPopover onClose={() => {}} />);
    const checkbox = await getByTestId('product-line-2-checkbox');
    checkbox.click();

    expect(mockSetSearchParams).toHaveBeenCalledWith({
      product_line: ['product-line-1', 'product-line-2'],
    });
  });
});
