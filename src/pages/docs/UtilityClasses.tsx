import React from "react";
import { SEO } from "../../components/SEO";
import { CodeBlock } from "../../components/CodeBlock";

export function UtilityClasses() {
  return (
    <>
      <SEO
        title="Documentation - Classes Utilitaires"
        description="Apprenez l'approche utility-first de CSSeducteur et découvrez les classes utilitaires disponibles."
        keywords={[
          "classes utilitaires",
          "utilitaires CSS",
          "mise en forme",
          "framework CSS",
        ]}
      />
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Classes Utilitaires
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          CSSeducteur propose un ensemble complet de classes utilitaires qui
          vous permettent de créer des interfaces modernes sans quitter votre
          HTML.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Espacement</h2>
        <CodeBlock
          code={`<div class="cs-p-4 cs-m-2">
  <div class="cs-px-6 cs-py-4">
    Utilitaires de Padding et Margin
  </div>
</div>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Typographie</h2>
        <CodeBlock
          code={`<p class="cs-text-lg cs-font-bold cs-text-primary">
  Texte stylisé avec des utilitaires
</p>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Flexbox</h2>
        <CodeBlock
          code={`<div class="cs-flex cs-items-center cs-justify-between">
  <div>Élément Flex 1</div>
  <div>Élément Flex 2</div>
</div>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Grille</h2>
        <CodeBlock
          code={`<div class="cs-grid cs-grid-cols-3 cs-gap-4">
  <div>Élément de Grille 1</div>
  <div>Élément de Grille 2</div>
  <div>Élément de Grille 3</div>
</div>`}
        />
      </div>
    </>
  );
}
