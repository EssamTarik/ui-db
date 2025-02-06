import { Outlet } from "react-router";
import TopBar from "../TopBar";
import styles from './styles.module.css';

interface Props {
  children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <TopBar />
      <main className={styles.mainContent}>
        {children ?? <Outlet />}
      </main>
    </>
  )
};

export default Layout;