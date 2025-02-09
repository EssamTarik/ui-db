import { useSearchParams } from 'react-router';
import { useUIDBContext } from '../providers/UIDBProvider/context';
import { PRODUCT_LINE_FILTER_KEY } from '../consts';

const useFilteredData = (filterKey = PRODUCT_LINE_FILTER_KEY) => {
  const [searchParams] = useSearchParams();
  const { data } = useUIDBContext();
  const devices = data?.devices ?? [];
  const productLines = searchParams.getAll(filterKey);

  if (productLines.length === 0) {
    return devices;
  }

  return devices.filter((device) => productLines.includes(device.line.id));
};

export default useFilteredData;
