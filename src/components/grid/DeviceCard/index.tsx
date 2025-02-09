import { Device } from '../../../providers/UIDBProvider/types';
import getDeviceInfo from '../../../utils/device/getDeviceInfo';
import DeviceImage from '../../misc/DeviceImage';
import ProductLink from '../../misc/ProductLink';
import styles from './styles.module.css';

interface Props {
  device: Device;
}

const DeviceCard = ({ device }: Props) => {
  const { line, name, shortname, id } = getDeviceInfo(device);

  return (
    <ProductLink id={id} className={styles.deviceCard}>
      <div className={styles.productLine}>{line}</div>
      <div className={styles.productImageContainer}>
        <DeviceImage
          className={styles.productImage}
          sizes="85px"
          device={device}
        />
      </div>
      <div className={styles.deviceInfo}>
        <p data-testid="device-name" className={styles.deviceName}>
          {name}
        </p>
        <p data-testid="device-short-name" className={styles.deviceShortName}>
          {shortname}
        </p>
      </div>
    </ProductLink>
  );
};

export default DeviceCard;
