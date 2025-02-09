import DeviceTable from '../../components/table/DeviceTable';
import usePaginationData from '../../hooks/usePaginationData';

const DeviceTablePage = () => {
  const { pageData } = usePaginationData();

  return <DeviceTable devices={pageData} />;
};

export default DeviceTablePage;
