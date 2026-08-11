import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import stats from "@site/src/data/stats.json";

const categories = [
  {
    icon: "🐉",
    title: "Digimon",
    statsKey: "digimon",
    description: "Unlock guides and evolution requirements.",
    link: "/docs/category/digimon",
  },
  {
    icon: "🏰",
    title: "Dungeon",
    statsKey: "dungeons",
    description: "Dungeon mechanics and boss walkthroughs.",
    link: "/docs/category/dungeon",
  },
  {
    icon: "🧬",
    title: "Evolution",
    statsKey: "evolution",
    description: "Evolution systems and progression.",
    link: "/docs/category/evolution",
  },
  {
    icon: "⚔️",
    title: "Role",
    statsKey: "roles",
    description: "Tank, Skill, and Auto Attack guides.",
    link: "/docs/category/role",
  },
  {
    icon: "🎒",
    title: "Items",
    statsKey: "items",
    description: "Important items and materials.",
    link: "/docs/category/items",
  },
  {
    icon: "🗺️",
    title: "Maps",
    statsKey: "maps",
    description: "Maps, NPCs, and locations.",
    link: "/docs/category/maps",
  },
];

export default function WikiCategories() {
  return (
    <section className={styles.section}>
      <>
<h2>Browse Categories</h2>

<p className={styles.sectionSubtitle}>
  Find guides, walkthroughs, and game information by category.
</p>
</>

      <div className={styles.grid}>
{categories.map((category) => (
  <Link
  key={category.title}
  className={styles.card}
  to={category.link}
  value={stats[category.title.toLowerCase()] || 0}
>
  <div className={styles.header}>
    <span className={styles.icon}>{category.icon}</span>
    <h3>{category.title}</h3>
  </div>

  <p>{category.description}</p>

  <span className={styles.more}>Explore →</span>
</Link>
))}
      </div>
    </section>
  );
}

<div className={styles.footer}>
  Explore →
</div>

