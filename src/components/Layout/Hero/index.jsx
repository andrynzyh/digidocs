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
          Unlock guides, dungeon walkthroughs,
          farming locations, and everything you need to progress in
          Digital Masters World.
          this wiki is a community-driven resource for players of all levels, from beginners to veterans.
          also this wiki is builded using AI and crowd-sourced contributions, ensuring that the information is accurate, up-to-date, and comprehensive.
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