import React from "react";
import { SEO } from "../../components/SEO";
import { CodeBlock } from "../../components/CodeBlock";

export default function UtilityClasses() {
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
          "csseducteur",
          "approche utility-first",
        ]}
      />
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Classes Utilitaires avec CSSeducteur
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          CSSeducteur propose un ensemble complet de classes utilitaires qui
          vous permettent de créer des interfaces modernes sans quitter votre
          HTML. Son approche **utility-first** vous aide à construire des mises
          en page rapidement tout en maintenant un code propre et flexible.
        </p>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          L'approche utility-first de CSSeducteur favorise l'utilisation de
          classes simples et réutilisables pour la mise en forme, vous
          permettant de concevoir des interfaces sans avoir besoin d'écrire une
          seule ligne de CSS personnalisé.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Espacement</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Utilisez les classes d'espacement de CSSeducteur pour ajuster
          rapidement les marges et les paddings de vos éléments, offrant ainsi
          plus de contrôle sur la mise en page sans recourir à un CSS externe.
        </p>
        <CodeBlock
          code={`<div class="cs-p-4 cs-m-2">
  <div class="cs-px-6 cs-py-4">
    Utilitaires de Padding et Margin
  </div>
</div>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Typographie</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          CSSeducteur vous permet de styliser facilement vos textes en utilisant
          des classes utilitaires pour la taille de police, la graisse, et la
          couleur, offrant ainsi une grande flexibilité tout en maintenant la
          simplicité de votre code HTML.
        </p>
        <CodeBlock
          code={`<p class="cs-text-lg cs-font-bold cs-text-primary">
  Texte stylisé avec des utilitaires
</p>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Flexbox</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Avec CSSeducteur, vous pouvez utiliser les classes utilitaires Flexbox
          pour disposer vos éléments de manière fluide et réactive. Il suffit
          d'ajouter les bonnes classes pour aligner et espacer vos éléments dans
          un conteneur flex.
        </p>
        <CodeBlock
          code={`<div class="cs-flex cs-items-center cs-justify-between">
  <div>Élément Flex 1</div>
  <div>Élément Flex 2</div>
</div>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Grille</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Les classes utilitaires de grille de CSSeducteur vous permettent de
          créer facilement des mises en page à plusieurs colonnes. Vous pouvez
          définir le nombre de colonnes et les espacements avec une simple
          syntaxe, pour un design rapide et réactif.
        </p>
        <CodeBlock
          code={`<div class="cs-grid cs-grid-cols-3 cs-gap-4">
  <div>Élément de Grille 1</div>
  <div>Élément de Grille 2</div>
  <div>Élément de Grille 3</div>
</div>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Pourquoi choisir les classes utilitaires CSSeducteur ?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          L'approche **utility-first** de CSSeducteur est idéale pour les
          développeurs qui cherchent à créer des interfaces réactives de manière
          rapide et efficace. En utilisant des classes utilitaires prédéfinies,
          vous réduisez le besoin d'écrire du CSS personnalisé tout en obtenant
          un design flexible et rapide à mettre en œuvre.
        </p>
      </div>
    </>
  );
}
