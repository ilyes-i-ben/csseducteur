import React from "react";
import { SEO } from "../../components/SEO";
import { CodeBlock } from "../../components/CodeBlock";

export function ResponsiveDesign() {
  return (
    <>
      <SEO
        title="Documentation - Design Réactif"
        description="Apprenez à créer des mises en page réactives avec le système de points de rupture de CSSeducteur."
        keywords={[
          "design réactif",
          "mobile-first",
          "points de rupture",
          "framework CSS",
        ]}
      />
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Design Réactif
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          CSSeducteur suit une approche mobile-first avec des modificateurs de
          points de rupture intuitifs.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Points de Rupture</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>sm: 640px et plus</li>
          <li>md: 768px et plus</li>
          <li>lg: 1024px et plus</li>
          <li>xl: 1280px et plus</li>
          <li>2xl: 1536px et plus</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Classes Réactives</h2>
        <CodeBlock
          code={`<div class="cs-grid cs-grid-cols-1 cs-md:grid-cols-2 cs-lg:grid-cols-3">
  <div>Élément de Grille Réactif</div>
  <div>Élément de Grille Réactif</div>
  <div>Élément de Grille Réactif</div>
</div>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Typographie Réactive
        </h2>
        <CodeBlock
          code={`<h1 class="cs-text-xl cs-md:text-2xl cs-lg:text-3xl">
  Titre Réactif
</h1>`}
        />
      </div>
    </>
  );
}
