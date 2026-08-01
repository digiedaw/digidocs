import React from "react";
import styles from "./styles.module.css";

export default function ItemLocationTable({ items = [] }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Item</th>
          <th>Source</th>
          <th>Note</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item.item}</td>
            <td>{item.source}</td>
            <td>{item.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}