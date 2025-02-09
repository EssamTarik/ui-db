import { Device } from '../../../providers/UIDBProvider/types';
import getDeviceInfo from '../../../utils/device/getDeviceInfo';
import DeviceImage from '../../misc/DeviceImage';
import styles from './styles.module.css';

interface Props {
  device: Device;
}
const DeviceRow = ({ device }: Props) => {
  const { name, line } = getDeviceInfo(device);

  return (
    <tr>
      <td>
        <DeviceImage
          className={styles.deviceImage}
          sizes="20px"
          device={device}
        />
      </td>
      <td>{line}</td>
      <td>{name}</td>
    </tr>
  );
};

export default DeviceRow;
