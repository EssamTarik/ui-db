import { Device } from '../../../providers/UIDBProvider/types';
import getDeviceInfo from '../../../utils/device/getDeviceInfo';
import styles from './styles.module.css';

interface Props {
  device: Device;
}

const DeviceInfoTable = ({ device }: Props) => {
  const { id, name, shortname, line } = getDeviceInfo(device);
  const productInfo = {
    'Product line': line,
    id: id,
    name: name,
    'short name': shortname,
    speed: device.unifi?.network?.ethernetMaxSpeedMegabitsPerSecond,
    'max power': device.unifi?.network?.radios.na?.maxPower,
    'number of ports': device.unifi?.network?.numberOfPorts,
  };

  return (
    <div className={styles.deviceInfo}>
      {Object.entries(productInfo).map(([key, value]) =>
        value ? (
          <div className={styles.deviceInfoRow} key={key}>
            <div className={styles.key}>{key}</div>
            <div className={styles.value}>{value}</div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default DeviceInfoTable;
