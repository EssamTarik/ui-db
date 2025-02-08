import { useMemo } from 'react';
import { useUIDBContext } from '../providers/UIDBProvider/context';

const useProductLines = (): { [id: string]: string } => {
  const { data } = useUIDBContext();

  return useMemo(() => {
    const devices = data?.devices ?? [];
    return devices.reduce((acc, device) => {
      return {
        ...acc,
        [device.line.id]: device.line.name,
      };
    }, {});
  }, [data]);
};

export default useProductLines;
