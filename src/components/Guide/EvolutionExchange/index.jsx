import React, { useState } from "react";
import styles from "./styles.module.css";

export default function EvolutionExchange({ categories }) {
  const [selected, setSelected] = useState(
    categories[0]?.items?.[0] || null
  );

  return (
    <div className={styles.container}>

      {/* =========================
          LEFT SIDE
      ========================= */}

      <aside className={styles.sidebar}>

        <div className={styles.sidebarHeader}>
          Evolution Exchange
        </div>

        <div className={styles.categoryList}>

          {categories.map((category) => (
            <div key={category.id}>

              <div className={styles.categoryHeader}>
                <span className={styles.categoryArrow}>
                  −
                </span>

                {category.name}
              </div>

              <div className={styles.digimonList}>

                {category.items.map((item) => (
                  <button
                    key={item.id}
                    className={`${styles.digimonItem} ${
                      selected?.id === item.id
                        ? styles.active
                        : ""
                    }`}
                    onClick={() => setSelected(item)}
                  >
                    {item.name}
                  </button>
                ))}

              </div>

            </div>
          ))}

        </div>

      </aside>


      {/* =========================
          RIGHT SIDE
      ========================= */}

      <main className={styles.content}>

        {selected ? (
          <>
            <div className={styles.productHeader}>

              {selected.icon && (
                <img
                  src={selected.icon}
                  alt=""
                  className={styles.productIcon}
                />
              )}

              <div>
                <h2>{selected.name}</h2>

                <div className={styles.productCategory}>
                  {selected.category}
                </div>
              </div>

            </div>


            <div className={styles.sectionTitle}>
              Evolution Requirements
            </div>


            <div className={styles.materialList}>

              {selected.materials?.length ? (

                selected.materials.map((material) => (
                  <div
                    key={material.name}
                    className={styles.materialCard}
                  >

                    <div className={styles.materialLeft}>

                      {material.icon && (
                        <img
                          src={material.icon}
                          alt=""
                          className={styles.materialIcon}
                        />
                      )}

                      <span>
                        {material.name}
                      </span>

                    </div>

                    <span className={styles.need}>
                      ×{material.need}
                    </span>

                  </div>
                ))

              ) : (

                <div className={styles.empty}>
                  No evolution data yet.
                </div>

              )}

            </div>

          </>
        ) : (

          <div className={styles.empty}>
            Select a Digimon.
          </div>

        )}

      </main>

    </div>
  );
}