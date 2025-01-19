import React from "react";
import { SEO } from "../../components/SEO";
import { CodeBlock } from "../../components/CodeBlock";

export default function Buttons() {
  return (
    <>
      <SEO
        title="CSSeducteur - Documentation des Boutons"
        description="Découvrez les styles et composants de boutons proposés par CSSeducteur, un framework CSS innovant."
        keywords={[
          "csseducteur",
          "boutons",
          "composants",
          "éléments UI",
          "framework CSS",
        ]}
      />
      <div className="prose max-w-none">
        <h1 className="text-4xl font-bold text-gray-900">
          Boutons - CSSeducteur
        </h1>

        <p className="mt-4">
          Les boutons sont des éléments essentiels dans toute interface
          utilisateur. Avec <strong>CSSeducteur</strong>, vous pouvez facilement
          styliser vos boutons pour qu'ils soient à la fois modernes et
          fonctionnels. Découvrez comment intégrer ces composants à vos projets
          grâce à <strong>CSSeducteur</strong>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Boutons de base</h2>
        <p>
          Le framework <strong>CSSeducteur</strong> propose une large gamme de
          styles de boutons adaptés à vos besoins. Voici quelques exemples de
          boutons de base que vous pouvez personnaliser à votre guise avec{" "}
          <strong>CSSeducteur</strong>.
        </p>
        <div className="not-prose space-x-4 mb-8">
          <button
            type="button"
            className="focus:outline-none text-white bg-indigo-600 hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
          >
            Principal
          </button>
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Green
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Contour
            </span>
          </button>
        </div>
        <CodeBlock
          code={`<button class="cs-btn cs-btn-primary">Principal</button>
<button class="cs-btn cs-btn-secondary">Secondaire</button>
<button class="cs-btn cs-btn-outline">Contour</button>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Tailles des boutons
        </h2>
        <p>
          Grâce à <strong>CSSeducteur</strong>, vous pouvez ajuster la taille de
          vos boutons pour qu'ils correspondent à différentes situations, qu'il
          s'agisse d'un bouton compact ou d'un appel à l'action proéminent.
        </p>
        <div className="not-prose space-x-4 mb-8">
          <button
            type="button"
            className="px-3 py-2 text-xs font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-600"
          >
            Extra small
          </button>
          <button
            type="button"
            className="px-3 py-2 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-600"
          >
            Small
          </button>
          <button
            type="button"
            className="px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-600 rounded-lg text-center"
          >
            Base
          </button>
          <button
            type="button"
            className="px-5 py-3 text-base font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-600"
          >
            Large
          </button>
          <button
            type="button"
            className="px-6 py-3.5 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-600 rounded-lg text-center"
          >
            Extra large
          </button>
        </div>
        <CodeBlock
          code={`<button class="cs-btn cs-btn-sm cs-btn-primary">Petit</button>
<button class="cs-btn cs-btn-primary">Par défaut</button>
<button class="cs-btn cs-btn-lg cs-btn-primary">Grand</button>`}
        />
        <p>
          Essayez ces différents styles pour rendre vos interfaces plus
          interactives et engageantes grâce à <strong>CSSeducteur</strong>.
        </p>

        {/* Nouveaux contenus */}
        <h2 className="text-3xl font-semibold mt-8 mb-4">
          Boutons et Grilles - CSSeducteur
        </h2>

        <p className="mt-4">
          <strong>CSSeducteur</strong> offre une variété de fonctionnalités pour
          simplifier le développement de vos interfaces. Dans cette section,
          nous explorerons les boutons interactifs avec des effets de survol
          (hover) et le puissant système de grille pour la disposition des
          éléments.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">
          Boutons avec effet de survol (Hover)
        </h3>
        <p>
          Les boutons avec des effets de survol ajoutent une touche
          d'interactivité à vos interfaces. Avec <strong>CSSeducteur</strong>,
          ces effets sont simples à mettre en œuvre et entièrement
          personnalisables.
        </p>
        <div className="not-prose space-x-4 mb-8">
          <button
            type="button"
            className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none"
          >
            Hover Bleu
          </button>
          <button
            type="button"
            className="px-5 py-2.5 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-300 focus:outline-none"
          >
            Hover Rouge
          </button>
          <button
            type="button"
            className="relative px-6 py-3 text-sm font-medium text-white bg-gradient-to-br from-green-400 to-blue-500 rounded-lg hover:from-green-500 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-green-300"
          >
            Dégradé Hover
          </button>
        </div>
        <CodeBlock
          code={`<button class="cs-btn cs-btn-hover-blue">Hover Bleu</button>
<button class="cs-btn cs-btn-hover-red">Hover Rouge</button>
<button class="cs-btn cs-btn-hover-gradient">Dégradé Hover</button>`}
        />

        <h3 className="text-2xl font-semibold mt-8 mb-4">Système de Grille</h3>
        <p>
          <strong>CSSeducteur</strong> propose un système de grille puissant et
          flexible qui facilite la disposition des éléments dans vos projets.
          Basé sur un modèle en colonnes, il vous permet de créer des designs
          réactifs avec facilité.
        </p>

        <h4 className="text-xl font-semibold mt-6 mb-2">Exemple de base</h4>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-500 text-white p-4 text-center rounded">
            Colonne 1
          </div>
          <div className="bg-purple-500 text-white p-4 text-center rounded">
            Colonne 2
          </div>
          <div className="bg-gray-500 text-white p-4 text-center rounded">
            Colonne 3
          </div>
        </div>
        <CodeBlock
          code={`<div class="cs-grid cs-grid-cols-3 cs-gap-4">
  <div class="cs-grid-item bg-blue">Colonne 1</div>
  <div class="cs-grid-item bg-green">Colonne 2</div>
  <div class="cs-grid-item bg-red">Colonne 3</div>
</div>`}
        />

        <h4 className="text-xl font-semibold mt-6 mb-2">
          Disposition Réactive
        </h4>
        <p>
          Le système de grille de <strong>CSSeducteur</strong> s'adapte
          automatiquement à la taille de l'écran grâce à des classes utilitaires
          pour chaque point de rupture (breakpoint).
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-indigo-500 text-white p-4 text-center rounded">
            1
          </div>
          <div className="bg-indigo-500 text-white p-4 text-center rounded">
            2
          </div>
          <div className="bg-indigo-500 text-white p-4 text-center rounded">
            3
          </div>
          <div className="bg-indigo-500 text-white p-4 text-center rounded">
            4
          </div>
        </div>
        <CodeBlock
          code={`<div class="cs-grid cs-grid-cols-2 md:cs-grid-cols-4 cs-gap-4">
  <div class="cs-grid-item-csseducteur">1</div>
  <div class="cs-grid-item">2</div>
  <div class="cs-grid-item">3</div>
  <div class="cs-grid-item-csseducteur">4</div>
</div>`}
        />

        <h3 className="text-xl font-semibold mt-6 mb-2">Grille imbriquée</h3>
        <p>
          Vous pouvez également créer des grilles imbriquées pour des designs
          plus complexes. Voici un exemple avec <strong>CSSeducteur</strong> :
        </p>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-200 p-4 rounded">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-purple-500 text-white p-2 text-center rounded">
                A
              </div>
              <div className="bg-purple-500 text-white p-2 text-center rounded">
                B
              </div>
            </div>
          </div>
          <div className="bg-gray-200 p-4 rounded">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-purple-500 text-white p-2 text-center rounded">
                C
              </div>
              <div className="bg-purple-500 text-white p-2 text-center rounded">
                D
              </div>
            </div>
          </div>
        </div>
        <CodeBlock
          code={`<div class="cs-grid cs-grid-cols-2 cs-gap-4">
  <div class="cs-grid-item">
    <div class="cs-grid cs-grid-cols-2 cs-gap-2">
      <div class="cs-grid-item">A</div>
      <div class="cs-grid-item">B</div>
    </div>
  </div>
  <div class="cs-grid-item">
    <div class="cs-grid cs-grid-cols-2 cs-gap-2">
      <div class="cs-grid-item">C</div>
      <div class="cs-grid-item">D</div>
    </div>
  </div>
</div>`}
        />

        <h3 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h3>
        <p>
          Avec <strong>CSSeducteur</strong>, la création d'interfaces
          interactives et responsives devient un jeu d'enfant. Profitez des
          boutons élégants avec effet de survol et du système de grille puissant
          pour vos projets.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Variantes de boutons
        </h2>
        <p>
          Avec <strong>CSSeducteur</strong>, les variantes de boutons permettent
          d'offrir une flexibilité maximale. Vous pouvez choisir entre des
          boutons simples, dégradés ou avec des effets d'animation, ce qui
          facilite leur intégration dans n'importe quel projet.
        </p>
        <CodeBlock
          code={`<button class="cs-btn cs-btn-ghost">Fantôme</button>
<button class="cs-btn cs-btn-gradient">Dégradé</button>`}
        />
        <p>
          Ces options rendent <strong>CSSeducteur</strong> particulièrement
          attractif pour les développeurs souhaitant personnaliser leurs
          interfaces avec style.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Accessibilité et bonnes pratiques
        </h2>
        <p>
          <strong>CSSeducteur</strong> met également l'accent sur
          l'accessibilité. Tous les boutons sont optimisés pour être utilisés
          avec des lecteurs d'écran et répondent aux normes ARIA, garantissant
          une expérience inclusive pour tous les utilisateurs.
        </p>
        <p>
          En suivant les bonnes pratiques fournies par{" "}
          <strong>CSSeducteur</strong>, vous vous assurez que vos projets sont à
          la fois performants et respectueux des standards modernes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Conclusion : CSSeducteur pour vos projets
        </h2>
        <p>
          Que vous soyez un développeur débutant ou expérimenté,
          <strong>CSSeducteur</strong> est conçu pour répondre à vos besoins.
          Grâce à sa simplicité d'utilisation, ses nombreuses options de
          personnalisation, et son accent sur les bonnes pratiques, il vous
          permet de réaliser des interfaces de qualité professionnelle.
        </p>
        <p>
          Adoptez <strong>CSSeducteur</strong> dès aujourd'hui pour transformer
          vos projets en véritables succès !
        </p>
      </div>
    </>
  );
}
