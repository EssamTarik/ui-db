import { renderHook } from '@testing-library/react';
import { mockUseUIDBContext } from '../../utils/testing';
import useProductLines from '../useProductLines';

jest.mock('../../providers/UIDBProvider/context', () => ({
  useUIDBContext: mockUseUIDBContext,
}));

describe('useProductLines', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return product lines', () => {
    const { result: productLines } = renderHook(() => useProductLines());
    expect(productLines.current).toEqual({
      'product-line-1': 'line 1',
      'product-line-2': 'line 2',
      'product-line-3': 'line 3',
    });
  });
});
