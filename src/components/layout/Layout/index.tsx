import { Outlet } from 'react-router';
import TopBar from '../TopBar';
import { useUIDBContext } from '../../../providers/UIDBProvider/context';
import styles from './styles.module.css';

interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const { isFetching } = useUIDBContext();
  return (
    <>
      <TopBar />
      {isFetching && (
        <div className={styles.loading}>
          <h1>Loading...</h1>
        </div>
      )}
      {!isFetching && (
        <main className={styles.mainContent}>{children ?? <Outlet />}</main>
      )}
    </>
  );
};

export default Layout;
