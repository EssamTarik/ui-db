import { renderHook } from '@testing-library/react';
import useSearchResults, { MatchType } from '../useSearchResults';
import mockDevices from '../../utils/mocks/mockDevices';
import { mockUseUIDBContext } from '../../utils/testing';

jest.mock('../../providers/UIDBProvider/context', () => ({
  useUIDBContext: () => mockUseUIDBContext(),
}));

describe('useSearchResults', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return search results for name matches', () => {
    const {
      result: { current: searchResults },
    } = renderHook(() => useSearchResults('product #'));
    expect(searchResults).toEqual([
      {
        device: mockDevices[0],
        matchType: MatchType.NAME,
      },
      {
        device: mockDevices[1],
        matchType: MatchType.NAME,
      },
    ]);
  });

  it('should return search results for name matches', () => {
    const {
      result: { current: searchResults },
    } = renderHook(() => useSearchResults('product #'));
    expect(searchResults).toEqual([
      {
        device: mockDevices[0],
        matchType: MatchType.NAME,
      },
      {
        device: mockDevices[1],
        matchType: MatchType.NAME,
      },
    ]);
  });

  it('should return search results for shortname matches', () => {
    const {
      result: { current: searchResults },
    } = renderHook(() => useSearchResults('pr2'));
    expect(searchResults).toEqual([
      {
        device: mockDevices[0],
        matchType: MatchType.SHORTNAME,
      },
      {
        device: mockDevices[1],
        matchType: MatchType.SHORTNAME,
      },
    ]);
  });

  it('should return search results for shortname matches', () => {
    const {
      result: { current: searchResults },
    } = renderHook(() => useSearchResults('pr2'));
    expect(searchResults).toEqual([
      {
        device: mockDevices[0],
        matchType: MatchType.SHORTNAME,
      },
      {
        device: mockDevices[1],
        matchType: MatchType.SHORTNAME,
      },
    ]);
  });

  it('should return empty array if no search term is empty', () => {
    const {
      result: { current: searchResults },
    } = renderHook(() => useSearchResults(''));
    expect(searchResults).toEqual([]);
  });

  it('should respect limit', () => {
    const {
      result: { current: searchResults },
    } = renderHook(() => useSearchResults('product #', 1));
    expect(searchResults).toEqual([
      {
        device: mockDevices[0],
        matchType: MatchType.NAME,
      },
    ]);
  });
});
