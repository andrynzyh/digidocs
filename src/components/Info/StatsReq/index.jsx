import React from "react";
import styles from "./styles.module.css";

export function StatsReq({
  hp,
  ht,
  ct,
}) {
  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <div className={styles.icon}>❤️</div>
        <div className={styles.label}>HP</div>
        <div className={styles.value}>{hp}</div>
      </div>
    
      <div className={styles.card}>
        <div className={styles.icon}>🎯</div>
        <div className={styles.label}>HT</div>
        <div className={styles.value}>{ht}</div>
      </div>

      <div className={styles.card}>
        <div className={styles.icon}>💥</div>
        <div className={styles.label}>CT</div>
        <div className={styles.value}>{ct}</div>
      </div>
    </div>
  );
}

export function TankReq({
  hp,
  de,
  bl,
}) {
  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <div className={styles.icon}>❤️</div>
        <div className={styles.label}>HP</div>
        <div className={styles.value}>{hp}</div>
      </div>
    
      <div className={styles.card}>
        <div className={styles.icon}>🛡</div>
        <div className={styles.label}>DE</div>
        <div className={styles.value}>{de}</div>
      </div>

      <div className={styles.card}>
        <div className={styles.icon}>🔒</div>
        <div className={styles.label}>BL</div>
        <div className={styles.value}>{bl}</div>
      </div>
    </div>
  );
}


