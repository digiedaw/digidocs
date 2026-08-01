import React from "react";
import styles from "./styles.module.css";

export default function WarningBox({ children }) {
  return (
    <div className={styles.warning}>
      <div className={styles.icon}>⚠️</div>

      <div className={styles.content}>
        <strong>Warning</strong>
        <div>{children}</div>
      </div>
    </div>
  );
}