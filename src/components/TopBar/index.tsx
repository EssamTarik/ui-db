import { Link } from 'react-router';
import Logo from '../ui/icons/Logo';
import packageJSON from '../../../package.json';
import styles from './styles.module.css';

const TopBar = () => {
  return (
    <header className={styles.topBar}>
      <nav>
        <Link className={styles.logoLink} to="/">
          <Logo className={styles.logo} />
        </Link>
      </nav>
      <p className={styles.author}>Author/ {packageJSON.author.name}</p>
    </header>
  );
};

export default TopBar;
