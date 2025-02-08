import classNames from 'classnames';
import { useUIDBContext } from '../../providers/UIDBProvider/context';
import styles from './styles.module.css';

interface Props {
  className?: string;
}

const DeviceCount = ({ className }: Props) => {
  const { data } = useUIDBContext();
  const deviceCount = data?.devices.length ?? 0;
  return (
    <div className={classNames(styles.deviceCount, className)}>
      {deviceCount} devices
    </div>
  );
};

export default DeviceCount;
