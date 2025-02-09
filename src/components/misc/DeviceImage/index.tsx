import { Device } from '../../../providers/UIDBProvider/types';
import getDeviceInfo from '../../../utils/device/getDeviceInfo';
import getDeviceImageSrcSet from '../../../utils/getDeviceImageSrcSet';

interface Props {
  device: Device;
  sizes?: string;
  className?: string;
}
const DeviceImage = ({ device, sizes, className }: Props) => {
  const { name } = getDeviceInfo(device);
  return (
    <img
      alt={name}
      className={className}
      sizes={sizes}
      srcSet={getDeviceImageSrcSet(device)}
    />
  );
};

export default DeviceImage;
