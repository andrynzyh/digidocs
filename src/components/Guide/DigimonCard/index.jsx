import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export default function DigimonCard({
  image,
  name,
  rank,
  attribute,
  power,
  investment,
  description,
  link,
}) {
  return (
    <div className={styles.card}>
      <img
        src={image}
        alt={name}
        className={styles.image}
      />

      <h3>{name}</h3>

      <p className={styles.meta}>
        {rank} • {attribute}
      </p>

      <p>
        <strong>Power:</strong> {power}
      </p>

      <p>
        <strong>Investment:</strong> {investment}
      </p>

      <p>{description}</p>

      <Link
        className="button button--primary"
        to={link}
      >
        View Unlock Guide
      </Link>
    </div>
  );
}