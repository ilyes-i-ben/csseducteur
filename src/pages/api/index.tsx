import React from "react";
import { Link } from "gatsby";
import { SEO } from "../../components/SEO";

export default function Index() {
    return (
        <>
            <SEO
                title="Documentation API CSSeducteur - Introduction"
                description="Découvrez l'API CSSeducteur, ses fonctionnalités et comment commencer à l'utiliser pour améliorer vos projets web."
                keywords={["API CSSeducteur", "documentation", "introduction", "développement web"]}
            />
            <div className="prose dark:prose-invert max-w-none">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                    Introduction à l'API CSSeducteur
                </h1>
                <p>
                    Bienvenue dans la documentation de l'API CSSeducteur. Notre API vous permet d'intégrer facilement des fonctionnalités avancées de CSS dans vos projets web. Que vous soyez un développeur débutant ou expérimenté, l'API CSSeducteur est conçue pour être simple à utiliser et extrêmement puissante.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-4">Pourquoi utiliser l'API CSSeducteur ?</h2>
                <p>
                    L'API CSSeducteur offre une gamme complète de fonctionnalités pour améliorer l'apparence et la performance de vos sites web. Avec des endpoints bien documentés et une authentification sécurisée, vous pouvez rapidement intégrer des styles CSS avancés et des animations dans vos projets.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-4">Fonctionnalités principales</h2>
                <ul>
                    <li>Accès à une bibliothèque complète de styles CSS</li>
                    <li>Support pour les animations et transitions CSS</li>
                    <li>Endpoints sécurisés avec authentification par clé API</li>
                    <li>Documentation détaillée et exemples de code</li>
                </ul>
                <h2 className="text-2xl font-semibold mt-8 mb-4">Commencer avec l'API CSSeducteur</h2>
                <p>
                    Pour commencer, consultez notre section <Link to="/api/authentication">Authentification</Link> pour apprendre comment obtenir et utiliser votre clé API. Ensuite, explorez les <Link to="/api/endpoints">Endpoints</Link> disponibles pour voir ce que vous pouvez faire avec l'API CSSeducteur.
                </p>
                <p>
                    Si vous avez des questions ou besoin d'aide, n'hésitez pas à consulter notre section <Link to="/api/errors">Gestion des erreurs</Link> ou à nous contacter directement.
                </p>
                <p>
                    Nous espérons que vous apprécierez utiliser l'API CSSeducteur et que cela vous aidera à créer des projets web encore plus impressionnants.
                </p>
            </div>
        </>
    );
}