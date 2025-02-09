import { URLSearchParamsInit } from 'react-router';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import mockDevices from '../../utils/mocks/mockDevices';
import usePaginationData from '../usePaginationData';

vi.mock('../useFilteredData', () => ({ default: () => mockDevices }));

const mockSetSearchParams = vi.fn();
const mockUseSearchParams = vi.fn().mockReturnValue([
  {
    get: () => '1',
  },
  (args: URLSearchParamsInit) => mockSetSearchParams(args),
]);

vi.mock('react-router', () => ({
  useSearchParams: () => mockUseSearchParams(),
}));

describe('usePaginationData', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return correct page data', () => {
    const { pageData, currentPage, totalPages } = usePaginationData(2);
    expect(pageData).toEqual([mockDevices[0], mockDevices[1]]);
    expect(currentPage).toBe(1);
    expect(totalPages).toBe(2);
  });

  it('should go to a page', () => {
    const { goToPage } = usePaginationData(2);
    goToPage(2);
    expect(mockSetSearchParams).toHaveBeenCalled();
  });
});
