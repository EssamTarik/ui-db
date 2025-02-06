import { useUIDBContext } from "../../providers/UIDBProvider/context";
import getDeviceImageSrcSet from "../../utils/getDeviceImageSrcSet";
import styles from "./styles.module.css";

const ProductTable = () => {
  const { data } = useUIDBContext();
  
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
          {data?.devices.map((device) => {
            const deviceName = device.product.name;
            const deviceLine = device.line.name;
            return (
              <tr key={device.id}>
                <td>
                  <img className={styles.deviceImage} sizes="1.25rem" srcSet={getDeviceImageSrcSet(device)} />
                </td>
                <td>{deviceLine}</td>
                <td className={styles.deviceNameCol}>{deviceName}</td>
              </tr>
            )
          }
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;