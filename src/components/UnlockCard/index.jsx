import React from "react";
import styles from "./styles.module.css";

export default function UnlockCard({
  title,
  rank,
  attribute,
  difficulty,
  time,
  description,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h1>{title}</h1>

        <p>{description}</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.item}>
          <span className={styles.label}>Rank</span>
          <span className={styles.value}>{rank}</span>
        </div>

        <div className={styles.item}>
          <span className={styles.label}>Attribute</span>
          <span className={styles.value}>{attribute}</span>
        </div>

        <div className={styles.item}>
          <span className={styles.label}>Difficulty</span>
          <span className={styles.value}>{difficulty}</span>
        </div>

        <div className={styles.item}>
          <span className={styles.label}>Estimated Time</span>
          <span className={styles.value}>{time}</span>
        </div>
      </div>
    </div>
  );
}