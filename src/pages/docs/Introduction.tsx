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
                ]}
            />
            <div className="prose  max-w-none">
                <h1 className="text-4xl font-bold text-gray-900 ">
                    Introduction
                </h1>
                <div className="my-6 p-4 bg-indigo-50  rounded-lg">
                    <p className="text-indigo-700 ">
                        CSSeducteur est bien plus qu'un simple framework CSS—c'est une
                        approche élégante du style qui rend votre flux de travail de
                        développement plus fluide et agréable. Avec ses classes utilitaires
                        et ses composants soigneusement conçus, vous pouvez créer des
                        interfaces époustouflantes avec un minimum d'effort.
                    </p>
                </div>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Démarrage Rapide</h2>
                <CodeBlock
                    code={`npm install csseducteur
# ou
yarn add csseducteur`}
                    language="bash"
                />

                <div className="my-4 p-4 bg-gray-50  rounded-lg">
                    <p className="text-sm text-gray-600 ">
                        💡 CSSeducteur est conçu pour être intuitif et facile à apprendre,
                        tout en offrant des fonctionnalités puissantes pour le développement
                        d'applications web modernes.
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

                <div className="my-4 p-4 bg-gray-50  rounded-lg">
                    <p className="text-sm text-gray-600 ">
                        ✨ Toutes les classes de CSSeducteur sont préfixées par 'cs-' afin
                        d'éviter les conflits avec d'autres frameworks et de maintenir un
                        code propre et organisé.
                    </p>
                </div>

                <h2 className="text-2xl font-semibold mt-8 mb-4">
                    Caractéristiques Principales
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        Approche utilitaire intuitive avec une nomenclature élégante des
                        classes
                    </li>
                    <li>
                        Prise en charge du mode sombre sans configuration supplémentaire
                    </li>
                    <li>
                        Utilitaires de conception réactive qui s'adaptent à tous les écrans
                    </li>
                    <li>Modèles de composants modernes pour un développement rapide</li>
                    <li>
                        Optimisation des performances avec une taille de bundle minimale
                    </li>
                    <li>
                        Styles par défaut magnifiques qui fonctionnent dès la sortie de la
                        boîte
                    </li>
                </ul>
            </div>
        </>
    );
}