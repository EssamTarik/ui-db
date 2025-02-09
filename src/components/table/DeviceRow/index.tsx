import classNames from 'classnames';
import { Device } from '../../../providers/UIDBProvider/types';
import getDeviceInfo from '../../../utils/device/getDeviceInfo';
import DeviceImage from '../../misc/DeviceImage';
import ProductLink from '../../misc/ProductLink';
import styles from './styles.module.css';

interface Props {
  device: Device;
}
const DeviceRow = ({ device }: Props) => {
  const { name, line } = getDeviceInfo(device);

  return (
    <tr>
      <td colSpan={3}>
        <ProductLink
          id={device.id}
          className={classNames(styles.link, styles.row)}
        >
          <DeviceImage
            className={styles.deviceImage}
            sizes="20px"
            device={device}
          />
          <span className={styles.col}>{line}</span>
          <span className={classNames(styles.deviceNameCol, styles.col)}>
            {name}
          </span>
        </ProductLink>
      </td>
    </tr>
  );
};

export default DeviceRow;
