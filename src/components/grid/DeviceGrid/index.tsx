import { Device } from '../../../providers/UIDBProvider/types';
import DeviceCard from '../DeviceCard';
import styles from './styles.module.css';

interface Props {
  devices: Device[];
}

const DeviceGrid = ({ devices }: Props) => {
  return (
    <div className={styles.deviceGrid}>
      {devices?.map((device) => {
        return device ? <DeviceCard key={device.id} device={device} /> : null;
      })}
    </div>
  );
};

export default DeviceGrid;
