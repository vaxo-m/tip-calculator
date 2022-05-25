import React from "react";
import styles from "./input.module.css";
import classNames from "classnames";

const Input = ({
  title,
  error,
  errorText,
  icon,
  placeholder,
  value,
  getValue,
  ...rest
}) => {
  return (
    <>
      {title && (
        <div className={styles.head}>
          <div>{title}</div>
          <div className={styles.error}>{error ? errorText : ""}</div>
        </div>
      )}
      <div className={styles.inputWrapper}>
        {icon && <div className={styles.inputLogoWrapper}>{icon}</div>}
        <input
          className={classNames(error && styles.errorBorder)}
          type="number"
          placeholder={placeholder}
          onChange={(e) => getValue(e.target.value)}
          value={value}
          {...rest}
        />
      </div>
    </>
  );
};

export default Input;
