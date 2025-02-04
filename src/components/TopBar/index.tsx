import { Link } from "react-router";
import Logo from "../ui/icons/Logo";
import styles from './styles.module.css';
import packageJSON from '../../../package.json';

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
}

export default TopBar;