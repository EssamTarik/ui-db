import usePaginationData from '../../../hooks/usePaginationData';
import styles from './styles.module.css';

const Pagination = () => {
  const { goToPage, currentPage, totalPages } = usePaginationData();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPage = Number(e.target.value);
    if (newPage >= 1 && newPage <= totalPages) {
      goToPage(Number(e.target.value));
    }
  };

  return (
    <div className={styles.paginationControls}>
      <span className={styles.pageInfo}>page</span>
      <input
        type="number"
        value={currentPage}
        min={0}
        max={totalPages}
        onChange={handleChange}
      />
      <span className={styles.pageInfo}>of {totalPages}</span>
    </div>
  );
};

export default Pagination;
