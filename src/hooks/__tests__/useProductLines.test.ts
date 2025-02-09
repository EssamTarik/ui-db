import { renderHook } from '@testing-library/react';
import { mockUseUIDBContext } from '../../utils/testing';
import useProductLines from '../useProductLines';

jest.mock('../../providers/UIDBProvider/context', () => ({
  useUIDBContext: mockUseUIDBContext,
}));

describe('useProductLines', () => {
  it('should return product lines', () => {
    const { result: productLines } = renderHook(() => useProductLines());
    expect(productLines.current).toEqual({
      'product-line-1': 'product 1',
      'product-line-2': 'product 2',
      'product-line-3': 'product 3',
    });
  });
});
