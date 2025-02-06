import { useUIDBContext } from "../../providers/UIDBProvider/context";
import getDeviceImageSrcSet from "../../utils/getDeviceImageSrcSet";
import styles from "./styles.module.css";

const ProductGrid = () => {
  const { data } = useUIDBContext();

  return (
    <div className={styles.productGrid}>
      {data?.devices.map((device) => {
        if (!device) {
          return null;
        }

        const deviceName = device.product?.name;
        const deviceShortName = device.shortnames?.[0];

        return (
          <div key={device.id} className={styles.productCard}>
            <div className={styles.productImageContainer}>
              <img className={styles.productImage} sizes="155px" srcSet={getDeviceImageSrcSet(device)} />
            </div>
            <div className={styles.deviceInfo}>
              <p className={styles.deviceName}>{deviceName}</p>
              <p className={styles.deviceShortName}>{deviceShortName}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProductGrid