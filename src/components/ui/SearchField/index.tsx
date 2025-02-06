import SearchIcon from '../icons/Search';
import styles from './styles.module.css';

const SearchField = () => {
  return (
    <div className={styles.searchFieldContainer}>
      <SearchIcon className={styles.searchIcon} />
      <input placeholder='Search' className={styles.searchField} />
    </div>
  )
}

export default SearchField;