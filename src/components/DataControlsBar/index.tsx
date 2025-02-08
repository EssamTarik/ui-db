import DeviceCount from '../DeviceCount';
import SearchField from '../SearchField';
import ViewSelector from '../ViewSelector';
import styles from './styles.module.css';

const DataControlsBar = () => {
  return (
    <div className={styles.dataControlsBar}>
      <div className={styles.section}>
        <SearchField />
        <DeviceCount className={styles.deviceCount} />
      </div>
      <div className={styles.section}>
        <ViewSelector />
      </div>
    </div>
  );
};

export default DataControlsBar;
