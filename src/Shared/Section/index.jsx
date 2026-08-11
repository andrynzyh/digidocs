import React from "react";
import styles from "./styles.module.css";

export default function Section({ title, children }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        {title}
      </h2>

      <div className={styles.body}>
        {children}
      </div>
    </section>
  );
}