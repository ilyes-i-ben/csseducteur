import React from "react";
import { SEO } from "../components/SEO";

export default function About() {
    return (
        <>
            <SEO
                title="À propos de CSSeducteur"
                description="Découvrez CSSeducteur, le framework CSS élégant pour le développement web moderne. Apprenez-en plus sur notre mission, notre équipe et nos valeurs."
                keywords={[
                    "CSSeducteur",
                    "framework CSS",
                    "développement web",
                    "à propos",
                    "équipe",
                    "mission",
                    "valeurs",
                ]}
            />
            <main className="relative bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose max-w-none">
                        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                            <h1 className="text-center text-4xl tracking-tight font-extrabold text-gray-900  sm:text-5xl md:text-6xl ">
                                <span className="block">À propos de</span>
                                <span className="block text-indigo-600">
                                    CSSeducteur
                                </span>
                            </h1>
                            <p className="text-center mt-3 max-w-md mx-auto text-base text-gray-500  sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                                CSSeducteur est un framework CSS moderne conçu pour simplifier le développement web et offrir une expérience utilisateur exceptionnelle. Notre mission est de fournir des outils puissants et intuitifs qui permettent aux développeurs de créer des interfaces élégantes et réactives avec un minimum d'effort.
                            </p>
                        </section>
                        <section className="py-12 bg-gray-50">
                            <h1 className="text-3xl font-extrabold mt-8 mb-4 text-center">Notre Mission</h1>
                            <p className="text-lg text-gray-600 text-center">
                                Nous croyons que le développement web doit être accessible à tous, c'est pourquoi nous avons créé CSSeducteur. Notre objectif est de rendre le processus de création de sites web plus fluide, plus rapide et plus agréable, tout en maintenant des standards élevés de qualité et de performance.
                            </p>
                        </section>
                        <section className="py-12 bg-gray-50">
                            <h1 className="text-3xl font-extrabold mt-8 mb-4 text-center">Caractéristiques Principales</h1>
                            <ul className="list-disc pl-6 space-y-2 list-none text-center">
                                <li>Classes utilitaires intuitives pour un style rapide et efficace</li>
                                <li>Support intégré du mode sombre</li>
                                <li>Design réactif pour toutes les tailles d'écran</li>
                                <li>Composants modernes et réutilisables</li>
                                <li>Optimisation des performances avec une taille de bundle minimale</li>
                                <li>Styles par défaut élégants et professionnels</li>
                            </ul>
                        </section>
                        <section className="py-12 bg-gray-50">
                            <h1 className="text-3xl font-extrabold mt-8 mb-4 text-center">Notre Équipe</h1>
                            <p className="text-lg text-gray-600 text-center">
                                CSSeducteur est développé par une équipe passionnée de développeurs et de designers qui partagent une vision commune : rendre le développement web plus accessible et plus agréable. Nous sommes dédiés à l'innovation et à l'amélioration continue de notre framework pour répondre aux besoins de la communauté.
                            </p>
                        </section>
                        <section className="py-12 bg-gray-50">
                            <h1 className="text-3xl font-extrabold mt-8 mb-4 text-center">Nous Contacter</h1>
                            <p className="text-lg text-gray-600 text-center">
                                Si vous avez des questions, des suggestions ou des commentaires, n'hésitez pas à nous contacter. Nous sommes toujours heureux de recevoir des retours et de collaborer avec la communauté pour améliorer CSSeducteur.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
}
