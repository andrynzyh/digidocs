import React from "react";
import Layout from "@theme/Layout";

import CraftingBrowser from "@site/src/components/Guide/CraftingBrowser";
import craftingItems from "@site/src/data/crafting";

export default function Crafting() {
  return (
    <Layout
      title="Crafting"
      description="DigiDocs Crafting Database"
    >
      <main>
        <div className="container margin-vert--lg">
          <h1>Crafting</h1>

          <p>
            Browse crafting recipes and required materials.
          </p>
          
          <CraftingBrowser items={craftingItems} />
          
        
        </div>
      </main>
    </Layout>
  );
}