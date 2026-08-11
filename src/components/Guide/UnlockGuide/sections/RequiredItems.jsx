import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

import Section from "../Section";

import styles from "./RequiredItems.module.css";

export default function RequiredItems({ items }) {

  const ITEM_PATH = useBaseUrl("/img/items/");
  const img = (file) => `${ITEM_PATH}${file}`;

  return (
    <Section title="Required Unlock Items">

      {items.map((item) => (

        <div
          key={item.name}
          className={styles.card}
        >

          <img
            src={img(item.icon)}
            alt={item.name}
            className={styles.icon}
          />

          <span className={styles.name}>
            {item.name}
          </span>

        </div>

      ))}

    </Section>
  );
}