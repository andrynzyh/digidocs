import React, { useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

export default function CraftingBrowser({ items = [] }) {
  const [selected, setSelected] = useState(null);

  const [openCategories, setOpenCategories] = useState({
    [items[0]?.category]: true,
  });

const [openSubCategories, setOpenSubCategories] = useState({});

  const ITEM_PATH = useBaseUrl("/img/items/");

  const getImage = (file) => `${ITEM_PATH}${file}`;

  if (!items.length) {
    return (
      <div className={styles.empty}>
        No crafting data available.
      </div>
    );
  }

  // ==========================================
  // CATEGORY STRUCTURE
  // ==========================================

  const categories = items.reduce((groups, item) => {
    const category = item.category || "Other";
    const subCategory = item.subcategory || "Other";

    if (!groups[category]) {
      groups[category] = {};
    }

    if (!groups[category][subCategory]) {
      groups[category][subCategory] = [];
    }

    groups[category][subCategory].push(item);

    return groups;
  }, {});

  // ==========================================
  // TOGGLE CATEGORY
  // ==========================================

const toggleCategory = (category) => {
  setOpenCategories((prev) => ({
    [category]: !prev[category],
  }));
};

  // ==========================================
  // TOGGLE SUB CATEGORY
  // ==========================================

const toggleSubCategory = (subCategory) => {
  setOpenSubCategories((prev) => ({
    [subCategory]: !prev[subCategory],
  }));
};

  return (
    <div className={styles.container}>

      {/* ================================================= */}
      {/* PANEL 1 — MAKING LIST */}
      {/* ================================================= */}

      <aside className={styles.listPanel}>

        <div className={styles.panelHeader}>
          Making List
        </div>

        <div className={styles.listBody}>

          {Object.entries(categories).map(
            ([category, subCategories]) => (

              <div key={category}>

                {/* MAIN CATEGORY */}

                <button
                  className={styles.categoryButton}
                  onClick={() => toggleCategory(category)}
                >
                  <span className={styles.arrow}>
                    {openCategories[category]
                      ? "▼"
                      : "▶"}
                  </span>

                  {category}
                </button>


                {/* SUB CATEGORIES */}

                {openCategories[category] && (

                  <div className={styles.subCategoryList}>

                    {Object.entries(subCategories).map(
                      ([subCategory, subItems]) => (

                        <div key={subCategory}>

                          <button
                            className={styles.subCategoryButton}
                            onClick={() =>
                              toggleSubCategory(subCategory)
                            }
                          >
                            <span className={styles.arrow}>
                              {openSubCategories[subCategory]
                                ? "▼"
                                : "▶"}
                            </span>

                            {subCategory}
                          </button>

                        </div>

                      )
                    )}

                  </div>

                )}

              </div>

            )
          )}

        </div>

      </aside>


      {/* ================================================= */}
      {/* PANEL 2 — ITEM PRODUCTION */}
      {/* ================================================= */}

      <main className={styles.productionPanel}>

        <div className={styles.panelHeader}>
          Item Production
        </div>

        <div className={styles.productionList}>

          {Object.entries(categories).map(
            ([category, subCategories]) =>

              openCategories[category] &&

              Object.entries(subCategories).map(
                ([subCategory, subItems]) =>

                  openSubCategories[subCategory] &&

                  subItems.map((item) => (

                    <button
                      key={item.id}
                      onClick={() => setSelected(item)}
                      className={`${styles.productionItem} ${
                        selected?.id === item.id
                          ? styles.selected
                          : ""
                      }`}
                    >

                      {/* ITEM ICON */}

                      <div className={styles.productionIcon}>
                        {item.icon && (
                          <img
                            src={getImage(item.icon)}
                            alt=""
                          />
                        )}
                      </div>


                      {/* ITEM NAME */}

                      <div className={styles.productionInfo}>

                        <div className={styles.productionName}>
                          {item.name}
                        </div>

                        <div className={styles.productionType}>
                          {item.subcategory}
                        </div>

                      </div>

                    </button>

                  ))
              )
          )}

        </div>

      </main>


      {/* ================================================= */}
      {/* PANEL 3 — NECESSARY MATERIAL */}
      {/* ================================================= */}

      <aside className={styles.materialPanel}>

        <div className={styles.panelHeader}>
          Necessary Material
        </div>

        {selected ? (
  <div className={styles.materialBody}>

    <div className={styles.materialList}>
      {selected.materials?.map((material) => (
        <div
          key={material.name}
          className={styles.materialCard}
        >
          <div className={styles.materialInfo}>

            {material.icon && (
              <img
                src={getImage(material.icon)}
                alt=""
                className={styles.materialIcon}
              />
            )}

            <span>
              {material.name}
            </span>

          </div>

          <div className={styles.materialAmount}>
            ×{material.need}
          </div>
        </div>
      ))}
    </div>

    <div className={styles.stats}>

      <div className={styles.statCard}>
        <div className={styles.statTitle}>
          Production Cost
        </div>

        <div className={styles.statValue}>
          {selected.cost}
        </div>
      </div>

      <div className={styles.statCard}>
        <div className={styles.statTitle}>
          Success Rate
        </div>

        <div className={styles.statValue}>
          {selected.success}
        </div>
      </div>

    </div>

  </div>
) : (
  <div className={styles.noSelection}>
    Select an item to view its materials.
  </div>
)}

      </aside>

    </div>
  );
}