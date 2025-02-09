import DeviceGrid from '../../components/grid/DeviceGrid';
import usePaginationData from '../../hooks/usePaginationData';

const DeviceGridPage = () => {
  const { pageData } = usePaginationData();
  return <DeviceGrid devices={pageData} />;
};

export default DeviceGridPage;
