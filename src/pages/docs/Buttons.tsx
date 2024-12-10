import React from "react";
import { SEO } from "../../components/SEO";
import { CodeBlock } from "../../components/CodeBlock";

export function Buttons() {
  return (
    <>
      <SEO
        title="Documentation - Boutons"
        description="Explorez les composants et styles de boutons de CSSeducteur."
        keywords={["boutons", "composants", "éléments UI", "framework CSS"]}
      />
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Boutons
        </h1>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Boutons de base</h2>
        <div className="not-prose space-x-4 mb-8">
          <button className="cs-btn cs-btn-primary">Principal</button>
          <button className="cs-btn cs-btn-secondary">Secondaire</button>
          <button className="cs-btn cs-btn-outline">Contour</button>
        </div>
        <CodeBlock
          code={`<button class="cs-btn cs-btn-primary">Principal</button>
<button class="cs-btn cs-btn-secondary">Secondaire</button>
<button class="cs-btn cs-btn-outline">Contour</button>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Tailles des boutons
        </h2>
        <div className="not-prose space-x-4 mb-8">
          <button className="cs-btn cs-btn-sm cs-btn-primary">Petit</button>
          <button className="cs-btn cs-btn-primary">Par défaut</button>
          <button className="cs-btn cs-btn-lg cs-btn-primary">Grand</button>
        </div>
        <CodeBlock
          code={`<button class="cs-btn cs-btn-sm cs-btn-primary">Petit</button>
<button class="cs-btn cs-btn-primary">Par défaut</button>
<button class="cs-btn cs-btn-lg cs-btn-primary">Grand</button>`}
        />
      </div>
    </>
  );
}
