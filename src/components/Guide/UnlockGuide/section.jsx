import React from "react";
import styles from "./Section.module.css";

export default function Section({ title, children }) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
      </div>

      <div className={styles.body}>
        {children}
      </div>
    </section>
  );
}