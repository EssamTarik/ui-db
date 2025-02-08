import DeviceCount from '../DeviceCount';
import SearchField from '../SearchField';
import styles from './styles.module.css';

const DataControlsBar = () => {
  return (
    <div className={styles.dataControlsBar}>
      <SearchField />
      <DeviceCount className={styles.deviceCount} />
    </div>
  );
};

export default DataControlsBar;
