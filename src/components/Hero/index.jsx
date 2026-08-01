import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import WikiCategories from "@site/src/components/WikiCategories";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        <span className={styles.badge}>
          DIGITAL MASTERS WORLD WIKI
        </span>

        <h1 className={styles.title}>DigiDocs</h1>

        <p className={styles.subtitle}>
          Unlock guides, dungeon walkthroughs, evolution paths,
          farming locations, and everything you need to progress in
          Digital Masters World.
        </p>

        <Link
          className="button button--primary button--lg"
          to="/docs">
          Explore the Wiki →
        </Link>

      </div>
    </section>
  );
}