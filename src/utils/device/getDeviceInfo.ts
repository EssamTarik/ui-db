import { Device } from '../../providers/UIDBProvider/types';

const DEFAULT_VALUE = 'unknown';

const getDeviceInfo = (device: Device) => {
  const { id } = device ?? {};
  if (!id) {
    throw new TypeError('Invalid device id');
  }

  return {
    id: id,
    name: device.product.name ?? DEFAULT_VALUE,
    shortname: device.shortnames[0] ?? DEFAULT_VALUE,
    line: device.line.name ?? DEFAULT_VALUE,
  };
};

export default getDeviceInfo;
