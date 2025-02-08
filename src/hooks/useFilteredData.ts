import { useMemo } from "react";
import { useUIDBContext } from "../providers/UIDBProvider/context";
import { Device } from "../providers/UIDBProvider/types";

type FilterFunction = (item: Device) => boolean;

const useFilteredUIDBDevices = (filterFunction: FilterFunction, limit = Infinity) => {
  const { data } = useUIDBContext();
  
  return useMemo(() => {
    const results = [];
    const devices = data?.devices ?? [];

    for (const device of devices) {
      if (results.length === limit) {
        break;
      }

      if (!filterFunction(device)) {
        continue;
      }

      results.push(device);
    }

    return results;
  }, [data, filterFunction, limit]);
}

export default useFilteredUIDBDevices;