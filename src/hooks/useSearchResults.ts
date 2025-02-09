import { useMemo } from 'react';
import { useUIDBContext } from '../providers/UIDBProvider/context';
import startsWithCaseInsensitive from '../utils/startsWithCaseInsensitive';
import { Device } from '../providers/UIDBProvider/types';

export enum MatchType {
  NAME,
  SHORTNAME,
}

export interface SearchResult {
  device: Device;
  matchType: MatchType;
}

const useSearchResults = (searchTerm: string, limit = Infinity) => {
  const { data } = useUIDBContext();

  return useMemo(() => {
    if (!searchTerm) {
      return [];
    }

    const results: SearchResult[] = [];
    const devices = data?.devices ?? [];

    for (const device of devices) {
      if (results.length === limit) {
        break;
      }
      const productNameMatch = startsWithCaseInsensitive(
        device.product.name,
        searchTerm
      );

      if (productNameMatch) {
        results.push({
          device,
          matchType: MatchType.NAME,
        });
        continue;
      }

      const productShortNameMatch = device.shortnames.some((shortName) =>
        startsWithCaseInsensitive(shortName, searchTerm)
      );

      if (productShortNameMatch) {
        results.push({
          device,
          matchType: MatchType.SHORTNAME,
        });
        continue;
      }
    }

    return results;
  }, [data, searchTerm, limit]);
};

export default useSearchResults;
