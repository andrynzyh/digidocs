import React from "react";
import styles from "./styles.module.css";

export default function EquipmentCard({
  name,
  effects = [],
  setTitle,
  list = [],
}) {
  return (
    <div className={styles.card}>

      <h3 className={styles.name}>{name}</h3>

      <div className={styles.section}>
        <h4>Effects</h4>

        <ul>
          {effects.map((effect, index) => (
            <li key={index}>{effect}</li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h4>{setTitle}</h4>
      </div>

      <div className={styles.section}>
        <h4>Equipment set List</h4>

          <ul>
          {list.map((effect, index) => (
            <li key={index}>{list}</li>
          ))}
        </ul>

      </div>
    </div>
  );
}