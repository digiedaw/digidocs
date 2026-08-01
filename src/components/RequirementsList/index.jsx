import React from "react";
import styles from "./styles.module.css";

export default function RequirementsList({ requirements = [] }) {
  if (!requirements.length) return null;

  return (
    <>
      <h2>Unlock Requirements</h2>

      <ul className={styles.list}>
        {requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
    </>
  );
}