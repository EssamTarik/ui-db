import { Link } from 'react-router';
import classNames from 'classnames';
import getDeviceImageSrcSet from '../../utils/getDeviceImageSrcSet';
import useFilteredData from '../../hooks/useFilteredData';
import styles from './styles.module.css';

const ProductTable = () => {
  const data = useFilteredData();

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeader}>
            <th className={styles.deviceImageCol} />
            <th>Product line</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {data.map((device) => {
            const deviceName = device.product.name;
            const deviceLine = device.line.name;

            return (
              <tr key={device.id}>
                <td colSpan={3}>
                  <Link
                    to={`/product/${device.id}`}
                    className={classNames(styles.link, styles.row)}
                  >
                    <img
                      className={styles.deviceImage}
                      sizes="20px"
                      srcSet={getDeviceImageSrcSet(device)}
                    />
                    <span className={styles.col}>{deviceLine}</span>
                    <span
                      className={classNames(styles.deviceNameCol, styles.col)}
                    >
                      {deviceName}
                    </span>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
