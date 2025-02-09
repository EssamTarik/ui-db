import classNames from 'classnames';
import { useState } from 'react';
import { useSearchParams } from 'react-router';
import FilterPopover from '../FilterPopover';
import { PRODUCT_LINE_FILTER_KEY } from '../../../consts';
import styles from './styles.module.css';

interface Props {
  className?: string;
}

const FilterButton = ({ className }: Props) => {
  const [searchParams] = useSearchParams();
  const selectedProductLines = searchParams.getAll(PRODUCT_LINE_FILTER_KEY);
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen((currentOpen) => !currentOpen);
  const hasProductLines = selectedProductLines.length > 0;

  return (
    <div className={classNames(styles.filterButtonContainer, className)}>
      <button
        data-testid="filter-button"
        onClick={handleClick}
        className={classNames(styles.filterButton, {
          [styles.active]: open || hasProductLines,
        })}
      >
        Filter
      </button>
      {open && <FilterPopover onClose={() => setOpen(false)} />}
    </div>
  );
};

export default FilterButton;
