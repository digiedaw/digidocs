import React from "react";
import styles from "./styles.module.css";

export default function UnlockSteps({ steps = [] }) {
  if (!steps.length) return null;

  return (
    <>
      <h2>Unlock Steps</h2>

      <div className={styles.container}>
        {steps.map((step, index) => (
          <div className={styles.step} key={index}>
            <div className={styles.number}>
              Step {index + 1}
            </div>

            <p>{step}</p>
          </div>
        ))}
      </div>
    </>
  );
}