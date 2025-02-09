import { beforeEach, vi } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import FilterButton from '..';

vi.mock('react-router', () => ({
  useSearchParams: () => [new URLSearchParams(), vi.fn()],
}));

vi.mock('../FilterPopover', () => ({
  FilterPopover: () => <div data-testid="filter-popover" />,
}));

describe('FilterButton', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it('should render filter button', async () => {
    const { getByTestId, queryByTestId } = render(<FilterButton />);
    await getByTestId('filter-button');
    expect(queryByTestId('filter-popover')).toBeNull();
  });
});
