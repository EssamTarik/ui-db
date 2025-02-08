import { Link } from 'react-router';
import getDeviceImageSrcSet from '../../utils/getDeviceImageSrcSet';
import usePaginationData from '../../hooks/usePaginationData';
import styles from './styles.module.css';

const ProductGrid = () => {
  const { pageData } = usePaginationData();

  return (
    <div className={styles.productGrid}>
      {pageData?.map((device) => {
        if (!device) {
          return null;
        }

        const deviceName = device.product?.name;
        const deviceShortName = device.shortnames?.[0];
        const deviceLine = device.line?.name;

        return (
          <Link
            to={`/product/${device.id}`}
            key={device.id}
            className={styles.productCard}
          >
            <div className={styles.productLine}>{deviceLine}</div>
            <div className={styles.productImageContainer}>
              <img
                className={styles.productImage}
                sizes="155px"
                srcSet={getDeviceImageSrcSet(device)}
              />
            </div>
            <div className={styles.deviceInfo}>
              <p className={styles.deviceName}>{deviceName}</p>
              <p className={styles.deviceShortName}>{deviceShortName}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductGrid;
