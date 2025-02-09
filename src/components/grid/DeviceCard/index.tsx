import { Device } from '../../../providers/UIDBProvider/types';
import getDeviceInfo from '../../../utils/device/getDeviceInfo';
import DeviceImage from '../../DeviceImage';
import ProductLink from '../../ProductLink';
import styles from './styles.module.css';

interface Props {
  device: Device;
}

const DeviceCard = ({ device }: Props) => {
  const { line, name, id } = getDeviceInfo(device);

  return (
    <ProductLink id={id} className={styles.deviceCard}>
      <div className={styles.productLine}>{line}</div>
      <div className={styles.productImageContainer}>
        <DeviceImage
          className={styles.productImage}
          sizes="155px"
          device={device}
        />
      </div>
      <div className={styles.deviceInfo}>
        <p className={styles.deviceName}>{name}</p>
        <p className={styles.deviceShortName}>{name}</p>
      </div>
    </ProductLink>
  );
};

export default DeviceCard;
