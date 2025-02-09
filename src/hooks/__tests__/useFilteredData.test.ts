import { vi, describe, it, expect, beforeEach, Mock } from 'vitest';
import mockDevices from '../../utils/mocks/mockDevices';
import { mockUseUIDBContext } from '../../utils/testing';
import useFilteredData from '../useFilteredData';

const mockGetAll = vi
  .fn()
  .mockReturnValue(['product-line-3', 'product-line-1']);

const mockUseSearchParams = vi.fn().mockReturnValue([{ getAll: mockGetAll }]);

vi.mock('../../providers/UIDBProvider/context', () => ({
  useUIDBContext: mockUseUIDBContext,
}));

vi.mock('react-router', () => ({
  useSearchParams: () => mockUseSearchParams(),
}));

vi.mock('../../consts', () => ({
  PRODUCT_LINE_FILTER_KEY: 'product_line',
}));

describe('useFilteredData', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should filter devices by product line', () => {
    const filteredDevices = useFilteredData();
    expect(filteredDevices).toEqual([mockDevices[0], mockDevices[2]]);
  });

  it('should return all devices if no product lines are selected', () => {
    (mockUseSearchParams as Mock).mockReturnValueOnce([{ getAll: () => [] }]);
    const filteredDevices = useFilteredData();
    expect(filteredDevices).toEqual(mockDevices);
  });

  it('should return empty array if no devices are found', () => {
    (mockUseSearchParams as Mock).mockReturnValueOnce([
      { getAll: () => ['product-line-4'] },
    ]);
    const filteredDevices = useFilteredData();
    expect(filteredDevices).toEqual([]);
  });

  it('should filter by different keys', () => {
    useFilteredData('different_key');
    expect(mockGetAll).toHaveBeenCalledWith('different_key');
  });
});
