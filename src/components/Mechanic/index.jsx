import React from "react";
import styles from "./styles.module.css";

export default function Mechanic({
  title,
  children,
}) {
  return (
    <div className={styles.box}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}