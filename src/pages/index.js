import React from "react";
import Layout from "@theme/Layout";
import Hero from "@site/src/components/Layout/Hero";
import WikiCategories from "@site/src/components/Layout/WikiCategories";

export default function Home() {
  return (
    <Layout
      title="DigiDocs"
      description="Digimon Masters Online Knowledge Base"
    >
      <Hero />
      <WikiCategories />
    </Layout  >
  );
}