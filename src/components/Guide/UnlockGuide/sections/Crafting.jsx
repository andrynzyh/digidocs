import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

import Section from "../Section";

import styles from "./Crafting.module.css";

export default function Crafting({ crafting }) {
  const ITEM_PATH = useBaseUrl("/img/items/");
  const img = (file) => `${ITEM_PATH}${file}`;

  return (
    <Section title="Crafting">

      <div className={styles.stats}>

        <div className={styles.statCard}>
          <div className={styles.statTitle}>Cost</div>
          <div className={styles.statValue}>
            {crafting.cost}
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statTitle}>Success Rate</div>
          <div className={styles.statValue}>
            {crafting.success}
          </div>
        </div>

      </div>

      <div className={styles.materialList}>

        {crafting.materials.map((item) => (

          <div
            key={item.name}
            className={styles.materialCard}
          >

            <div className={styles.materialLeft}>

              <img
                src={img(item.icon)}
                alt={item.name}
                className={styles.materialIcon}
              />

              <span className={styles.materialName}>
                {item.name}
              </span>

            </div>

            <span className={styles.amount}>
              ×{item.amount}
            </span>

          </div>

        ))}

      </div>

    </Section>
  );
}