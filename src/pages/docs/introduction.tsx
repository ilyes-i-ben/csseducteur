import React from "react";
import { CodeBlock } from "../../components/CodeBlock";
import { SEO } from "../../components/SEO";

export default function Introduction() {
  return (
    <>
      <SEO
        title="Documentation - Introduction"
        description="Commencez avec CSSeducteur, le framework CSS élégant pour le développement web moderne."
        keywords={[
          "CSSeducteur",
          "framework CSS",
          "documentation",
          "démarrer",
          "développement web",
          "design réactif",
          "composants CSS",
          "performances optimisées",
        ]}
      />
      <div className="prose max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 ">Introduction</h1>
        <div className="my-6 p-4 bg-indigo-50 rounded-lg">
          <p className="text-indigo-700 font-bold">
            CSSeducteur est bien plus qu'un simple framework CSS—c'est une
            approche élégante du style qui rend votre flux de travail de
            développement plus fluide et agréable. Avec ses classes utilitaires
            et ses composants soigneusement conçus, vous pouvez créer des
            interfaces époustouflantes avec un minimum d'effort. Il est conçu
            pour les développeurs modernes qui souhaitent une solution rapide
            mais efficace pour la création d'applications web élégantes et
            performantes.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Démarrage Rapide</h2>
        <CodeBlock
          code={`npm install csseducteur
# ou
yarn add csseducteur`}
          language="bash"
        />

        <div className="my-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 font-bold">
            💡 CSSeducteur est conçu pour être intuitif et facile à apprendre,
            tout en offrant des fonctionnalités puissantes pour le développement
            d'applications web modernes. Vous pouvez commencer à l'utiliser
            immédiatement après l'installation.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Utilisation de Base
        </h2>
        <CodeBlock
          code={`<div class="cs-container cs-flex cs-items-center cs-justify-between">
  <h1 class="cs-text-2xl cs-font-bold cs-text-primary">
    Bonjour, CSSeducteur !
  </h1>
  <button class="cs-btn cs-btn-primary">
    Commencer
  </button>
</div>`}
        />

        <div className="my-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 font-bold">
            ✨ Toutes les classes de CSSeducteur sont préfixées par 'cs-' afin
            d'éviter les conflits avec d'autres frameworks et de maintenir un
            code propre et organisé. Ce préfixe garantit également une meilleure
            lisibilité et facilite l'intégration avec d'autres bibliothèques.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Caractéristiques Principales
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Approche utilitaire intuitive</strong> avec une nomenclature
            élégante des classes, permettant un développement rapide et une
            personnalisation simple.
          </li>
          <li>
            <strong>Prise en charge du mode sombre</strong> sans configuration
            supplémentaire, offrant ainsi une expérience utilisateur optimale
            pour toutes les conditions d'éclairage.
          </li>
          <li>
            <strong>Utilitaires de conception réactive</strong> qui s'adaptent à
            tous les écrans, garantissant que votre interface reste fluide et
            agréable sur toutes les résolutions.
          </li>
          <li>
            <strong>Modèles de composants modernes</strong> pour un
            développement rapide, incluant des boutons, des cartes, des menus et
            bien plus encore, prêts à être utilisés.
          </li>
          <li>
            <strong>Optimisation des performances</strong> avec une taille de
            bundle minimale, ce qui permet un temps de chargement plus rapide et
            une meilleure expérience utilisateur.
          </li>
          <li>
            <strong>Styles par défaut magnifiques</strong> qui fonctionnent dès
            la sortie de la boîte, vous permettant de créer des designs
            professionnels sans effort supplémentaire.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Personnalisation Avancée
        </h2>
        <p>
          CSSeducteur vous permet de personnaliser facilement votre expérience
          de développement. Que ce soit pour ajuster les couleurs, la
          typographie ou même créer des composants sur mesure, tout est conçu
          pour être modifiable. Utilisez les fichiers de configuration pour
          ajuster les valeurs par défaut et adapter le framework à vos besoins
          spécifiques.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
        <p>
          CSSeducteur est la solution parfaite pour les développeurs qui
          cherchent à créer des interfaces élégantes et réactives sans perdre de
          temps sur des détails complexes. Grâce à sa simplicité d'utilisation,
          ses performances optimisées et ses fonctionnalités avancées,
          CSSeducteur vous permet de vous concentrer sur ce qui compte vraiment
          : créer des applications web modernes et époustouflantes.
        </p>
      </div>
    </>
  );
}
