import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export default function RelatedGuides({ guides = [] }) {
  if (!guides.length) return null;

  return (
    <section className={styles.section}>
      <h2>Related Guides</h2>

      <div className={styles.grid}>
        {guides.map((guide, index) => (
          <Link
            key={index}
            to={guide.link}
            className={styles.card}
          >
            <h3>{guide.title}</h3>

            {guide.description && (
              <p>{guide.description}</p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}