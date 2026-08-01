import React from "react";
import styles from "./styles.module.css";

export default function TipBox({ children }) {
  return (
    <div className={styles.tip}>
      <div className={styles.icon}>💡</div>

      <div className={styles.content}>
        <strong>Tip</strong>
        <div>{children}</div>
      </div>
    </div>
  );
}