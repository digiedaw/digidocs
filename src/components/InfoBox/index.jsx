import React from "react";
import styles from "./styles.module.css";

export default function InfoBox({ children }) {
  return (
    <div className={styles.info}>
      <div className={styles.icon}>ℹ️</div>

      <div>
        <strong>Information</strong>
        <div>{children}</div>
      </div>
    </div>
  );
}