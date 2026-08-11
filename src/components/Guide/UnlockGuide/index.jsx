import React from "react";

import Header from "./sections/Header";
import RequiredItems from "./sections/RequiredItems";
import ObtainMethod from "./sections/ObtainMethod";
import QuestGuide from "./sections/QuestGuide";
import Crafting from "./sections/Crafting";
import Notes from "./sections/Notes";

import styles from "./styles.module.css";

export default function UnlockGuide({ data }) {
  return (
    <div className={styles.container}>

      <Header
        name={data.name}
        icon={data.icon}
        rank={data.rank}
      />

      <RequiredItems items={data.requiredItems} />

      <ObtainMethod obtain={data.obtain} />

      <QuestGuide quest={data.quest} />

      <Crafting crafting={data.crafting} />

      <Notes notes={data.notes} />

    </div>
  );
}