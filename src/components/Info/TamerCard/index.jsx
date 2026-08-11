import React from "react";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function TamerCard({
  name,
  image,
  overview,
  stats,
  skill,
  passives,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={useBaseUrl(image)} alt={name} className={styles.avatar} />

        <div>
          <h2>{name}</h2>
          <p>{overview}</p>
        </div>
      </div>

      <div className={styles.stats}>
        <div>
          <strong>HP</strong>
          <span>{stats.hp}</span>
        </div>

        <div>
          <strong>DS</strong>
          <span>{stats.ds}</span>
        </div>

        <div>
          <strong>AT</strong>
          <span>{stats.at}</span>
        </div>

        <div>
          <strong>DE</strong>
          <span>{stats.de}</span>
        </div>
      </div>

      <div className={styles.section}>
        <h3>Skill</h3>

        <div className={styles.skill}>
          <img
            src={useBaseUrl(skill.image)}
            alt={skill.name}
            className={styles.skillIcon}
          />

          <div>
            <h4>{skill.name}</h4>

            <p>
              <strong>Cooldown:</strong> {skill.cooldown}
            </p>

            <p>{skill.description}</p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h3>Passive Skills</h3>

        {passives.map((p, i) => (
          <div key={i} className={styles.passive}>
            <img
              src={useBaseUrl(p.image)}
              alt={p.name}
              className={styles.passiveIcon}
            />

            <div>
              <strong>{p.name}</strong>
              <p>{p.effect}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}