import React from "react";
import { SEO } from "../../components/SEO";
import { CodeBlock } from "../../components/CodeBlock";

export default function DarkMode() {
  return (
    <>
      <SEO
        title="Documentation - Mode Sombre"
        description="Apprenez à implémenter le mode sombre dans votre application en utilisant CSSeducteur, le framework CSS ultime."
        keywords={[
          "mode sombre",
          "CSSeducteur",
          "framework CSS",
          "thème sombre",
        ]}
      />
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Mode Sombre avec CSSeducteur
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          CSSeducteur offre une intégration native pour gérer le mode sombre
          dans vos projets. Grâce à son modificateur puissant{" "}
          <code>cs-dark</code>, vous pouvez créer des interfaces modernes et
          élégantes qui s'adaptent automatiquement aux préférences de vos
          utilisateurs.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Utilisation de Base
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Pour activer le mode sombre, il suffit d'utiliser le modificateur{" "}
          <code>cs-dark</code> dans vos classes CSS. Voici un exemple simple :
        </p>
        <CodeBlock
          code={`<div class="cs-bg-white cs-dark:bg-gray-900">
  <p class="cs-text-gray-900 cs-dark:text-white">
    Texte en mode sombre automatique
  </p>
</div>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Basculer en Mode Sombre Dynamiquement
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Vous pouvez également permettre à vos utilisateurs de basculer entre
          le mode clair et le mode sombre à l'aide de JavaScript :
        </p>
        <CodeBlock
          code={`const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark');
};`}
          language="javascript"
        />
        <p className="text-gray-600 dark:text-gray-400">
          En attachant cette fonction à un bouton, vous pouvez offrir une
          expérience utilisateur fluide :
        </p>
        <CodeBlock
          code={`<button onClick={toggleDarkMode} class="cs-btn cs-dark:cs-btn-light">
  Basculer le mode
</button>`}
          language="html"
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Préférence Système</h2>
        <p className="text-gray-600 dark:text-gray-400">
          CSSeducteur prend en charge les préférences système par défaut. Vous
          pouvez détecter si l'utilisateur préfère un thème sombre et appliquer
          automatiquement les classes correspondantes :
        </p>
        <CodeBlock
          code={`// Détecter la préférence du mode sombre du système
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
}`}
          language="javascript"
        />
        <p className="text-gray-600 dark:text-gray-400">
          Cette approche garantit que votre application respecte les choix de
          vos utilisateurs dès leur première visite.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Avantages de CSSeducteur pour le Mode Sombre
        </h2>
        <ul className="list-disc ml-8 text-gray-600 dark:text-gray-400">
          <li>
            Simplifie la gestion des thèmes avec des classes intuitives comme{" "}
            <code>cs-dark</code>.
          </li>
          <li>
            Prend en charge les préférences utilisateur avec{" "}
            <code>prefers-color-scheme</code>.
          </li>
          <li>
            Facilement extensible pour répondre aux besoins de design avancés.
          </li>
        </ul>
      </div>
    </>
  );
}
