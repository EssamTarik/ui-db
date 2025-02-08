import { Link, useSearchParams } from 'react-router';
import Logo from '../ui/icons/Logo';
import packageJSON from '../../../package.json';
import styles from './styles.module.css';

const TopBar = () => {
  const [searchParams] = useSearchParams();
  const linkSearchParams = searchParams.toString();

  return (
    <header className={styles.topBar}>
      <nav>
        <Link
          className={styles.logoLink}
          to={{ pathname: '/', search: linkSearchParams }}
        >
          <Logo className={styles.logo} />
        </Link>
      </nav>
      <p className={styles.author}>Author/ {packageJSON.author.name}</p>
    </header>
  );
};

export default TopBar;
