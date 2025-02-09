import { Device } from '../../../providers/UIDBProvider/types';
import DeviceRow from '../DeviceRow';
import styles from './styles.module.css';

interface Props {
  devices: Device[];
}

const DeviceTable = ({ devices }: Props) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeader}>
            <th className={styles.deviceImageCol} />
            <th>Product line</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {devices.map((device) => {
            return <DeviceRow device={device} key={device.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DeviceTable;
