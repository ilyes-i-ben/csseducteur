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
      <div className="prose max-w-none">
        <h1 className="text-4xl font-bold text-dark">
          Classes Utilitaires avec CSSeducteur
        </h1>

        <p className="text-lg text-gray-900">
          CSSeducteur propose un ensemble complet de classes utilitaires qui
          vous permettent de créer des interfaces modernes sans quitter votre
          HTML. Son approche <strong>utility-first</strong> vous aide à
          construire des mises en page rapidement tout en maintenant un code
          propre et flexible.
        </p>

        <p className="text-lg text-gray-900 ">
          L'approche utility-first de CSSeducteur favorise l'utilisation de
          classes simples et réutilisables pour la mise en forme, vous
          permettant de concevoir des interfaces sans avoir besoin d'écrire une
          seule ligne de CSS personnalisé.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Espacement</h2>
        <p className="text-lg text-gray-900 ">
          Utilisez les classes d'espacement de CSSeducteur pour ajuster
          rapidement les marges et les paddings de vos éléments, offrant ainsi
          plus de contrôle sur la mise en page sans recourir à un CSS externe.
          CSSeducteur simplifie l'espacement.
        </p>
        <CodeBlock
          code={`<div class="csseducteur-p-4 cs-m-2">
  <div class="cs-px-6 cs-py-4">
    Utilitaires de Padding et Margin
  </div>
</div>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Typographie</h2>
        <p className="text-lg text-gray-900 ">
          CSSeducteur vous permet de styliser facilement vos textes en utilisant
          des classes utilitaires pour la taille de police, la graisse, et la
          couleur, offrant ainsi une grande flexibilité tout en maintenant la
          simplicité de votre code HTML. Avec CSSeducteur, la typographie
          devient intuitive.
        </p>
        <CodeBlock
          code={`<p class="cs-text-lg cs-font-bold cs-text-primary">
  Texte stylisé avec des utilitaires
</p>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Flexbox</h2>
        <p className="text-lg text-gray-900 ">
          Avec CSSeducteur, vous pouvez utiliser les classes utilitaires Flexbox
          pour disposer vos éléments de manière fluide et réactive. Il suffit
          d'ajouter les bonnes classes pour aligner et espacer vos éléments dans
          un conteneur flex. CSSeducteur rend Flexbox plus accessible.
        </p>
        <CodeBlock
          code={`<div class="cs-flex cs-items-center cs-justify-between">
  <div>Élément Flex 1</div>
  <div>Élément Flex 2</div>
</div>`}
        />
        <h2 className="text-4xl font-bold text-dark">
          Padding et Margin avec CSSeducteur
        </h2>

        <p className="text-lg text-gray-900">
          CSSeducteur facilite la gestion de l'espacement entre et autour des
          éléments HTML grâce à ses classes utilitaires dédiées au padding et au
          margin. L'approche utility-first permet de personnaliser rapidement
          vos mises en page sans écrire de CSS supplémentaire.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Padding</h3>
        <p className="text-lg text-gray-900 ">
          Utilisez les classes utilitaires de padding pour contrôler les
          espacements internes de vos éléments. Voici quelques exemples :
        </p>
        <CodeBlock
          code={`<div class="cs-p-4">
  Conteneur avec padding global de 1rem
</div>
<div class="cs-px-6 cs-py-2">
  Conteneur avec padding horizontal de 1.5rem et vertical de 0.5rem
</div>`}
        />

        <h3 className="text-2xl font-semibold mt-8 mb-4">Margin</h3>
        <p className="text-lg text-gray-900">
          Les classes utilitaires de margin vous permettent de gérer les
          espacements externes de vos éléments. Voici quelques exemples
          pratiques :
        </p>
        <CodeBlock
          code={`<div class="cs-m-4">
  Conteneur avec margin global de 1rem
</div>
<div class="cs-mt-2 cs-mb-6">
  Conteneur avec margin supérieur de 0.5rem et inférieur de 1.5rem
</div>`}
        />

        <h3 className="text-2xl font-semibold mt-8 mb-4">Résumé</h3>
        <p className="text-lg text-gray-900 ">
          CSSeducteur simplifie l'espacement en vous offrant une gamme complète
          de classes utilitaires pour gérer le padding et le margin. Que ce soit
          pour des ajustements rapides ou pour des mises en page complexes, ces
          outils vous permettent de créer des designs propres, réactifs et
          flexibles. Exploitez tout le potentiel de CSSeducteur pour accélérer
          votre flux de travail et améliorer la qualité de vos interfaces.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Grille</h2>
        <p className="text-lg text-gray-900">
          Les classes utilitaires de grille de CSSeducteur vous permettent de
          créer facilement des mises en page à plusieurs colonnes. Vous pouvez
          définir le nombre de colonnes et les espacements avec une simple
          syntaxe, pour un design rapide et réactif. CSSeducteur optimise la
          création de grilles.
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
        <p className="text-lg text-gray-900 ">
          L'approche <strong>utility-first</strong> de CSSeducteur est idéale
          pour les développeurs qui cherchent à créer des interfaces réactives
          de manière rapide et efficace. En utilisant des classes utilitaires
          prédéfinies, vous réduisez le besoin d'écrire du CSS personnalisé tout
          en obtenant un design flexible et rapide à mettre en œuvre.
          CSSeducteur est votre allié pour un développement optimisé.
        </p>

        <p className="text-lg text-gray-900 ">
          En conclusion, CSSeducteur redéfinit la manière dont vous construisez
          vos interfaces, en rendant le processus plus rapide, plus simple et
          plus efficace. Adoptez CSSeducteur pour bénéficier de ses avantages
          exceptionnels.
        </p>
      </div>
    </>
  );
}
