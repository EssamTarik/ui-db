import { useEffect, useRef } from 'react';
import classNames from 'classnames';
import ProductLink from '../../../misc/ProductLink';
import styles from './styles.module.css';

interface Props {
  id: string;
  name: string;
  shortName: string;
  highlightMatchLength?: number;
  highlighted?: boolean;
}

const SearchOption = ({
  id,
  name,
  shortName,
  highlighted = false,
  highlightMatchLength = 0,
}: Props) => {
  const elementRef = useRef<HTMLAnchorElement>(null);
  const prevHighlighted = useRef(highlighted);

  useEffect(() => {
    const becameHighlighted = highlighted && !prevHighlighted.current;
    if (becameHighlighted && elementRef.current) {
      elementRef.current.scrollIntoView({ block: 'end' });
    }

    prevHighlighted.current = highlighted;
  }, [highlighted]);

  const matchText = name.slice(0, highlightMatchLength);

  return (
    <ProductLink
      ref={elementRef}
      id={id}
      className={classNames(styles.searchOption, {
        [styles.highlighted]: highlighted,
      })}
      key={id}
    >
      <span
        className={classNames(styles.productName, styles.searchOptionLabel)}
      >
        <span className={styles.matchText}>{matchText}</span>
        <span>{name.slice(highlightMatchLength)}</span>
      </span>
      <span className={classNames(styles.shortName, styles.searchOptionLabel)}>
        {shortName}
      </span>
    </ProductLink>
  );
};

export default SearchOption;
