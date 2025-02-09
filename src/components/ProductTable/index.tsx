import classNames from 'classnames';
import usePaginationData from '../../hooks/usePaginationData';
import ProductLink from '../ProductLink';
import DeviceImage from '../DeviceImage';
import styles from './styles.module.css';

const ProductTable = () => {
  const { pageData } = usePaginationData();

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
          {pageData.map((device) => {
            const deviceName = device.product.name;
            const deviceLine = device.line.name;

            return (
              <tr key={device.id}>
                <td colSpan={3}>
                  <ProductLink
                    id={device.id}
                    className={classNames(styles.link, styles.row)}
                  >
                    <DeviceImage
                      className={styles.deviceImage}
                      sizes="20px"
                      device={device}
                    />
                    <span className={styles.col}>{deviceLine}</span>
                    <span
                      className={classNames(styles.deviceNameCol, styles.col)}
                    >
                      {deviceName}
                    </span>
                  </ProductLink>
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
