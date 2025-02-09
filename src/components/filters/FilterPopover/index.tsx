import { FocusEventHandler, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router';
import useProductLines from '../../../hooks/useProductLines';
import Popover from '../../ui/Popover';
import { PRODUCT_LINE_FILTER_KEY } from '../../../consts';
import styles from './styles.module.css';

interface Props {
  onClose: () => void;
}

const FilterPopover = ({ onClose }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedProductLines = searchParams.getAll(PRODUCT_LINE_FILTER_KEY);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    popoverRef.current?.focus();
  }, []);

  const productLines = useProductLines();
  const productLineEntries = Object.entries(productLines);

  const handleBlur: FocusEventHandler = (e) => {
    if (!popoverRef.current?.contains(e.relatedTarget as Node)) {
      onClose();
    }
  };

  const handleChange = (checked: boolean, productLine: string) => {
    if (checked) {
      setSearchParams({
        product_line: [...selectedProductLines, productLine],
      });
    } else {
      setSearchParams({
        product_line: selectedProductLines.filter(
          (line) => line !== productLine
        ),
      });
    }
  };

  return (
    <Popover
      ref={popoverRef}
      onBlur={handleBlur}
      tabIndex={-1}
      className={styles.popover}
    >
      <div className={styles.heading}>Product line</div>
      <ul className={styles.filterList}>
        {productLineEntries.map(([id, name]) => (
          <li className={styles.filterListItem} key={id}>
            <label className={styles.filterListItemLabel}>
              <input
                checked={selectedProductLines.includes(id)}
                onChange={(e) => handleChange(e.target.checked, id)}
                className={styles.checkbox}
                type="checkbox"
              />
              <span>{name}</span>
            </label>
          </li>
        ))}
      </ul>
    </Popover>
  );
};

export default FilterPopover;
