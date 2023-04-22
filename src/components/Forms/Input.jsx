import React from "react";
import styles from "./Input.module.css";
export const Input = ({ label, type, value, onChange, name, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        {label}
        <input
          type={type}
          value={value}
          onChange={onChange}
          className={styles.input}
          name={name}
          required
          onBlur={onBlur}
        />
      </label>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
