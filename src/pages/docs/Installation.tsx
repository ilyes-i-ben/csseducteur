import React from "react";
import { SEO } from "../../components/SEO";
import { CodeBlock } from "../../components/CodeBlock";

export function Installation() {
  return (
    <>
      <SEO
        title="Documentation - Installation"
        description="Apprenez à installer et configurer CSSeducteur dans votre projet."
        keywords={["installation", "configuration", "framework CSS"]}
      />
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Installation
        </h1>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Installation via NPM
        </h2>
        <CodeBlock
          code={`npm install csseducteur
# ou avec yarn
yarn add csseducteur`}
          language="bash"
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Configuration</h2>
        <p>Ajoutez CSSeducteur au point d'entrée de votre projet :</p>
        <CodeBlock
          code={`// styles.css ou main.css
@import 'csseducteur/dist/csseducteur.css';`}
          language="css"
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Utilisation via CDN
        </h2>
        <p>
          Vous pouvez également utiliser CSSeducteur directement depuis un CDN :
        </p>
        <CodeBlock
          code={`<link 
  rel="stylesheet" 
  href="https://cdn.jsdelivr.net/npm/csseducteur/dist/csseducteur.min.css"
/>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Prochaines Étapes</h2>
        <p>
          Après l'installation, vous pouvez commencer à utiliser les classes
          utilitaires et les composants de CSSeducteur dans votre HTML.
          Consultez notre section d'exemples pour découvrir comment créer des
          modèles d'interface utilisateur courants.
        </p>
      </div>
    </>
  );
}
