import { Link } from "react-router";
import classNames from "classnames";
import styles from './styles.module.css';

interface Props {
  id: string;
  name: string;
  shortName: string;
  highlightMatchLength?: number
}
const SearchOption = ({ id, name, shortName, highlightMatchLength = 0 }: Props) => {
  const matchText = name.slice(0, highlightMatchLength);

  return (
    <Link to={`/product/${id}`} className={styles.searchOption} key={id}>
      <span className={classNames(styles.productName, styles.searchOptionLabel)}>
        <span className={styles.matchText}>{matchText}</span>
        <span>{name.slice(highlightMatchLength)}</span>
      </span>
      <span className={classNames(styles.shortName, styles.searchOptionLabel)}>{shortName}</span>
    </Link>
  );
}

export default SearchOption;