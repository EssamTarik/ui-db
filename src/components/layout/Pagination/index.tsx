import { useRef } from 'react';
import usePaginationData from '../../../hooks/usePaginationData';
import styles from './styles.module.css';

const Pagination = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { goToPage, currentPage, totalPages } = usePaginationData();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPage = Number(e.target.value);
    if (newPage >= 1 && newPage <= totalPages) {
      goToPage(Number(e.target.value));
    }
  };

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  };

  return (
    <div className={styles.paginationControls}>
      <span className={styles.pageInfo}>page</span>
      <input
        ref={inputRef}
        onFocus={handleFocus}
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
