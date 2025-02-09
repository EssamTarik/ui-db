import { useParams } from 'react-router';
import { useState } from 'react';
import { useUIDBContext } from '../../providers/UIDBProvider/context';
import CTA from '../../components/ui/CTA';
import DeviceImage from '../../components/DeviceImage';
import styles from './styles.module.css';

const DeviceDetails = () => {
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

  const productInfo = {
    'Product line': device.line.name,
    id: device.id,
    name: device.product.name,
    'short name': device.shortnames[0],
    speed: device.unifi?.network?.ethernetMaxSpeedMegabitsPerSecond,
    'max power': device.unifi?.network?.radios.na?.maxPower,
    'number of ports': device.unifi?.network?.numberOfPorts,
  };

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
          <div className={styles.heading}>{device.product.name}</div>
          <div className={styles.productLine}>{device.line.name}</div>
          <div className={styles.productInfo}>
            {Object.entries(productInfo).map(([key, value]) =>
              value ? (
                <div className={styles.productInfoRow} key={key}>
                  <div className={styles.key}>{key}</div>
                  <div className={styles.value}>{value}</div>
                </div>
              ) : null
            )}
          </div>
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

export default DeviceDetails;
