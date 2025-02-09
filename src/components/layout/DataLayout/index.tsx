import { Outlet } from 'react-router';
import DataControlsBar from '../DataControlsBar';
import Layout from '../Layout';
import Pagination from '../Pagination';
import ErrorBoundary from '../../misc/ErrorBoundary';
import styles from './styles.module.css';

const DataLayout = () => (
  <Layout>
    <DataControlsBar />
    <div className={styles.dataContent}>
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </div>
    <Pagination />
  </Layout>
);

export default DataLayout;
