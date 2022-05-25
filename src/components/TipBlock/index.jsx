import { Dollar } from "../../icons";
import styles from "./tipBlock.module.css";

const TipBlock = ({ numeratorText, value }) => {
  return (
    <div className={styles.tipBlock}>
      <div className={styles.textColumn}>
        <p className={styles.numerator}>{numeratorText}</p>
        <p className={styles.denominator}>/ person</p>
      </div>
      <div className={styles.value}>
        <Dollar color={"#26c2ae"} height={17} width={17} isBolder={true} />
        <span>{value}</span>
      </div>
    </div>
  );
};

export default TipBlock;
