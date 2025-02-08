import { useSearchParams } from 'react-router';
import { useUIDBContext } from '../providers/UIDBProvider/context';

const useFilteredData = () => {
  const [searchParams] = useSearchParams();
  const { data } = useUIDBContext();
  const devices = data?.devices ?? [];
  const productLines = searchParams.getAll('product_line');

  if (productLines.length === 0) {
    return devices;
  }

  return devices.filter((device) => productLines.includes(device.line.id));
};

export default useFilteredData;
