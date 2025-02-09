import mockDevices from '../../utils/mocks/mockDevices';
import useFilteredData from '../useFilteredData';

const mockGetAll = jest
  .fn()
  .mockReturnValue(['product-line-3', 'product-line-1']);

const mockUseSearchParams = jest.fn().mockReturnValue([{ getAll: mockGetAll }]);

jest.mock('../../providers/UIDBProvider/context', () => ({
  useUIDBContext: () => ({
    data: {
      devices: mockDevices,
    },
  }),
}));

jest.mock('react-router', () => ({
  useSearchParams: () => mockUseSearchParams(),
}));

jest.mock('../../consts', () => ({
  PRODUCT_LINE_FILTER_KEY: 'product_line',
}));

describe('useFilteredData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should filter devices by product line', () => {
    const filteredDevices = useFilteredData();
    expect(filteredDevices).toEqual([mockDevices[0], mockDevices[2]]);
  });

  it('should return all devices if no product lines are selected', () => {
    (mockUseSearchParams as jest.Mock).mockReturnValueOnce([
      { getAll: () => [] },
    ]);
    const filteredDevices = useFilteredData();
    expect(filteredDevices).toEqual(mockDevices);
  });

  it('should return empty array if no devices are found', () => {
    (mockUseSearchParams as jest.Mock).mockReturnValueOnce([
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
