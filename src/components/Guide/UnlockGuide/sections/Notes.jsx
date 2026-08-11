import React from "react";
import Admonition from "@theme/Admonition";

import Section from "../Section";

export default function Notes({ notes }) {
  if (!notes?.length) return null;

  return (
    <Section title="Notes">
      {notes.map((note, index) => (
        <Admonition
          key={index}
          type={note.type}
          title={note.title}
        >
          <p>{note.content}</p>
        </Admonition>
      ))}
    </Section>
  );
}