import classNames from 'classnames';
import { useState } from 'react';
import FilterPopover from '../FilterPopover';
import styles from './styles.module.css';

interface Props {
  className?: string;
}

const FilterButton = ({ className }: Props) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen((currentOpen) => !currentOpen);

  return (
    <div className={classNames(styles.filterButtonContainer, className)}>
      <button
        onClick={handleClick}
        className={classNames(styles.filterButton, { [styles.active]: open })}
      >
        Filter
      </button>
      {open && <FilterPopover onClose={() => setOpen(false)} />}
    </div>
  );
};

export default FilterButton;
