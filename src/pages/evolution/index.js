import React from "react";
import Layout from "@theme/Layout";

import EvolutionExchange from "@site/src/components/Guide/EvolutionExchange";
import evolutionExchange from "@site/src/data/crafting/evolutionExchange";

export default function Evolution() {
  return (
    <Layout
      title="Evolution Exchange"
      description="DigiDocs Evolution Exchange"
    >
      <main>
        <div className="container margin-vert--lg">

          <h1>Evolution Exchange</h1>

          <p>
            Browse Digimon evolution requirements and exchange materials.
          </p>

          <EvolutionExchange
            categories={evolutionExchange}
          />

        </div>
      </main>
    </Layout>
  );
}