import React from "react";
import Admonition from "@theme/Admonition";

import Section from "../Section";

import styles from "./QuestGuide.module.css";

export default function QuestGuide({ quest }) {
  return (
    <Section title="Quest Guide">

      <h3 className={styles.heading}>
        Requirements
      </h3>

      <ul className={styles.requirements}>
        {quest.requirements.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>

      <h3 className={styles.heading}>
        Steps
      </h3>

      <ol className={styles.steps}>
        {quest.steps.map((step, index) => (
          <li key={index}>

            <div className={styles.stepText}>
              {step.text}
            </div>

            {step.admonitions?.map((admonition, i) => (
  <Admonition
    key={i}
    type={admonition.type}
    title={admonition.title}
  >
    <p>{admonition.content}</p>
  </Admonition>
))}

          </li>
        ))}
      </ol>

    </Section>
  );
}