import SearchField from '../ui/SearchField';
import styles from './styles.module.css';

const DataControlsBar = () => {
  return (
    <div className={styles.dataControlsBar}>
      <SearchField />
    </div>
  );
};

export default DataControlsBar;
