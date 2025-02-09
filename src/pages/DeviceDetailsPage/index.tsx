import { useParams } from 'react-router';
import { useState } from 'react';
import { useUIDBContext } from '../../providers/UIDBProvider/context';
import CTA from '../../components/ui/CTA';
import DeviceImage from '../../components/misc/DeviceImage';
import DeviceInfoTable from '../../components/device/DeviceInfoTable';
import getDeviceInfo from '../../utils/device/getDeviceInfo';
import styles from './styles.module.css';

const DeviceDetailsPage = () => {
  const [viewJSONDetails, setViewJSONDetails] = useState(false);
  const { id } = useParams();
  const { indexedDevices, isFetching } = useUIDBContext();
  const indexedDataLoading = Object.keys(indexedDevices).length === 0;

  const toggleViewJSONDetails = () => {
    setViewJSONDetails((currentValue) => !currentValue);
  };

  const device = id && indexedDevices[id];

  if (!device) {
    return (
      <div className={styles.status}>
        <h1 className={styles.heading}>
          {isFetching || indexedDataLoading ? 'Loading...' : 'Device not found'}
        </h1>
      </div>
    );
  }

  const { name } = getDeviceInfo(device);

  return (
    <div className={styles.deviceDetailsContainer}>
      <div className={styles.deviceDetails}>
        <div className={styles.imgContainer}>
          <DeviceImage
            className={styles.productImg}
            sizes="260px"
            device={device}
          />
        </div>
        <div className={styles.deviceInfo}>
          <div className={styles.heading}>{name}</div>
          <div className={styles.productLine}>{name}</div>
          <DeviceInfoTable device={device} />
        </div>
      </div>
      <div className={styles.jsonSection}>
        {!viewJSONDetails && (
          <CTA
            onClick={toggleViewJSONDetails}
            className={styles.jsonDetailsButton}
          >
            See all details as json
          </CTA>
        )}
        {viewJSONDetails && (
          <>
            <label>JSON object:</label>
            <div className={styles.code}>{JSON.stringify(device, null, 2)}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default DeviceDetailsPage;
