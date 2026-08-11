import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./Header.module.css";

export default function Header({ name, icon, rank }) {
  const DIGIMON_PATH = useBaseUrl("/img/digimon/");

  const img = (file) => `${DIGIMON_PATH}${file}`;

  return (
    <header className={styles.header}>

      <img
        src={img(icon)}
        alt={name}
        className={styles.icon}
      />

      <div className={styles.info}>

        <h1 className={styles.title}>
          {name}
        </h1>

        <span className={styles.rank}>
          {rank}
        </span>

        <p className={styles.subtitle}>
          Unlock Guide
        </p>

      </div>

    </header>
  );
}