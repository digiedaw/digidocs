import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.logo}>DigiDocs</h2>

        <p className={styles.description}>
          A modern knowledge base for
          <strong> Digimon Masters World</strong>.
          Discover unlock guides, dungeon strategies, role guides, and progression paths.
        </p>

        <nav className={styles.navigation}>
          <Link to="/">Home</Link>
          <Link to="/docs">Wiki</Link>
          <Link to="/docs/Role/AutoAttack/Overview">Roles</Link>
          <Link to="/docs/Dungeon">Dungeons</Link>
          <Link to="/docs/Digimon">Digimon</Link>

          <a
            href="https://github.com/digiedaw/digidocs"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} DigiDocs
          </p>

          <span>•</span>

          <p>
            Not affiliated with Digimon Masters World or Bandai Namco.
          </p>
        </div>
      </div>
    </footer>
  );
}