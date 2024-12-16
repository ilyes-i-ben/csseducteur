import React from "react";
import { SEO } from "../../components/SEO";
import { CodeBlock } from "../../components/CodeBlock";

export default function DarkMode() {
    return (
        <>
            <SEO
                title="Documentation - Mode Sombre"
                description="Implémentez le mode sombre dans votre application en utilisant les utilitaires de mode sombre de CSSeducteur."
                keywords={["mode sombre", "changement de thème", "framework CSS"]}
            />
            <div className="prose dark:prose-invert max-w-none">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                    Mode Sombre
                </h1>

                <p className="text-lg text-gray-600 dark:text-gray-400">
                    CSSeducteur fournit une prise en charge intégrée du mode sombre avec
                    le modificateur <code>cs-dark</code>.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">
                    Utilisation de Base
                </h2>
                <CodeBlock
                    code={`<div class="cs-bg-white cs-dark:bg-gray-900">
  <p class="cs-text-gray-900 cs-dark:text-white">
    Texte en mode sombre automatique
  </p>
</div>`}
                />

                <h2 className="text-2xl font-semibold mt-8 mb-4">
                    Basculer en Mode Sombre
                </h2>
                <CodeBlock
                    code={`const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark');
};`}
                    language="javascript"
                />

                <h2 className="text-2xl font-semibold mt-8 mb-4">Préférence Système</h2>
                <CodeBlock
                    code={`// Détecter la préférence du mode sombre du système
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
}`}
                    language="javascript"
                />
            </div>
        </>
    );
}