import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

import Section from "../Section";

import styles from "./ObtainMethod.module.css";

export default function ObtainMethod({ obtain }) {
  const ITEM_PATH = useBaseUrl("/img/items/");
  const img = (file) => `${ITEM_PATH}${file}`;

  return (
    <Section title="How to Obtain">

      {obtain.map((entry) => (

        <div
          key={entry.item.name}
          className={styles.card}
        >

          <div className={styles.header}>

            <img
              src={img(entry.item.icon)}
              alt={entry.item.name}
              className={styles.icon}
            />

            <div className={styles.title}>
              {entry.item.name}
            </div>

          </div>

<p className={styles.description}>
  {entry.description}
</p>

          {entry.materials && (
            <>
              <h4 className={styles.subtitle}>
                Materials
              </h4>

              {entry.materials.map((mat) => (

                <div
                  key={mat.name}
                  className={styles.material}
                >

                  <img
                    src={img(mat.icon)}
                    alt={mat.name}
                  />

                  <span>
                    {mat.name}
                  </span>

                  <span className={styles.amount}>
                    ×{mat.amount}
                  </span>

                </div>

              ))}
            </>
          )}

          {entry.cost && (
            <div className={styles.cost}>
              <strong>Cost:</strong> {entry.cost}
            </div>
          )}

        </div>

      ))}

    </Section>
  );
}