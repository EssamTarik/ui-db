import { Outlet } from "react-router";
import DataControlsBar from "../DataControlsBar";
import Layout from "../Layout";
import styles from './styles.module.css';

const DataLayout = () => (
  <Layout>
    <DataControlsBar />
    <div className={styles.dataContent}><Outlet /></div>
  </Layout>
);

export default DataLayout;