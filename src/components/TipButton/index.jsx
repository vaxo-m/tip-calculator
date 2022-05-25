import styles from "./tipButton.module.css";
import classNames from "classnames";

const TipButton = ({ value, isSelected, getValue }) => (
  <button
    className={classNames(
      styles.tipButton,
      isSelected && styles.activeTipButton
    )}
    onClick={() => getValue(value)}
  >
    {value}%
  </button>
);

export default TipButton;
