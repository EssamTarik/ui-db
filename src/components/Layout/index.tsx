import { Outlet } from "react-router";
import TopBar from "../TopBar";
import styles from './styles.module.css';


const Layout = () => {
  return (
    <>
      <TopBar />
      <main className={styles.mainContent}>
        {<Outlet />}
      </main>
    </>
  )
};

export default Layout;