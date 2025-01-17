import React from "react";
import { SEO } from "../../components/SEO";
import { CodeBlock } from "../../components/CodeBlock";

export default function ResponsiveDesign() {
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
          "csseducteur",
          "responsive design",
        ]}
      />
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Design Réactif avec CSSeducteur
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          CSSeducteur suit une approche mobile-first avec des modificateurs de
          points de rupture intuitifs. Grâce à une structure simple et flexible,
          il permet de créer des mises en page réactives efficaces qui
          s'adaptent à toutes les tailles d'écrans.
        </p>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          Avec CSSeducteur, le design réactif devient facile à implémenter. Son
          système de points de rupture vous permet de gérer la disposition des
          éléments en fonction de la taille de l'écran, assurant une expérience
          utilisateur fluide et cohérente sur tous les appareils.
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
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Les classes réactives de CSSeducteur permettent de personnaliser
          facilement la disposition de vos éléments en fonction de la taille de
          l'écran. Par exemple, vous pouvez avoir une grille à une colonne sur
          les petits écrans et la passer à trois colonnes sur les grands écrans.
        </p>
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
        <p className="text-lg text-gray-600 dark:text-gray-400">
          CSSeducteur vous permet également de rendre la typographie réactive.
          Vous pouvez ajuster la taille du texte en fonction de la largeur de
          l'écran, offrant ainsi une lecture optimale sur tous les appareils.
        </p>
        <CodeBlock
          code={`<h1 class="cs-text-xl cs-md:text-2xl cs-lg:text-3xl">
  Titre Réactif
</h1>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Pourquoi utiliser CSSeducteur ?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          CSSeducteur est un choix idéal pour ceux qui recherchent un cadre
          flexible et facile à utiliser pour créer des sites web réactifs. Son
          approche mobile-first et ses classes de points de rupture vous offrent
          un contrôle total sur la mise en page, tout en maintenant le code
          simple et lisible. Que vous soyez débutant ou développeur expérimenté,
          CSSeducteur vous aidera à créer des designs réactifs de manière rapide
          et efficace.
        </p>
      </div>
    </>
  );
}
