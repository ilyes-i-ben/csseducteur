import React from "react";
import { SEO } from "../../../components/SEO";
import { CodeBlock } from "../../../components/CodeBlock";

export default function ListBlogs() {
    return (
        <>
            <SEO
                title="Documentation API CSSeducteur - Lister les Blogs"
                description="Découvrez le guide complet pour lister les blogs avec l'API CSSeducteur. Accédez facilement aux données des blogs grâce à l'API puissante de CSSeducteur."
                keywords={["CSSeducteur", "API", "documentation", "blogs", "lister blogs", "API CSSeducteur"]}
            />
            <div className="prose dark:prose-invert max-w-none">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                    Lister les Blogs - Documentation API CSSeducteur
                </h1>
                <p>
                    Bienvenue dans la documentation officielle de l'API CSSeducteur !
                    L'API <strong>CSSeducteur</strong> permet aux développeurs d'intégrer et de gérer facilement les blogs dans l'écosystème CSSeducteur.
                    Ce point de terminaison est votre accès à une liste complète de tous les blogs disponibles dans la base de données CSSeducteur.
                    Exploitez ce point de terminaison pour enrichir vos applications avec les capacités puissantes de blogging offertes par CSSeducteur.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-4">Point de Terminaison</h2>
                <CodeBlock code={`GET /blogs`} language="http" />
                <p>
                    Le point de terminaison <code>/blogs</code> est une requête <strong>GET</strong> qui retourne un tableau d'objets blogs provenant de la base de données CSSeducteur.
                    Conçu pour fournir un accès rapide et fiable, ce point de terminaison vous permet d'explorer facilement tout le contenu de blogs hébergé sur la plateforme CSSeducteur.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-4">Exemple de Requête</h2>
                <CodeBlock
                    code={`fetch('https://api.csseducteur.com/v1/blogs')
  .then(response => response.json())
  .then(data => console.log(data));`}
                    language="javascript"
                />
                <p>
                    Avec seulement quelques lignes de code, vous pouvez utiliser l'API CSSeducteur pour récupérer et exploiter les données des blogs dans vos projets.
                    L'exemple ci-dessus montre une méthode simple pour interagir avec l'API CSSeducteur en utilisant JavaScript.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-4">Réponse</h2>
                <CodeBlock
                    code={`{
  "data": [
    {
      "id": 1,
      "title": "First Blog",
      "content": "This is the content of the first blog.",
      "author": "Author Name",
      "createdAt": "2025-01-01T00:00:00Z"
    },
    {
      "id": 2,
      "title": "Second Blog",
      "content": "This is the content of the second blog.",
      "author": "Author Name",
      "createdAt": "2025-01-02T00:00:00Z"
    }
    // More blogs
  ],
  "total": 2,
  "limit": 10,
  "offset": 0
}`}
                    language="json"
                />
                <p>
                    La réponse de l'API <strong>CSSeducteur</strong> contient un tableau d'objets blogs. Chaque objet inclut des détails importants comme :
                    <ul>
                        <li><code>id</code> : Un identifiant unique pour le blog dans la base de données CSSeducteur.</li>
                        <li><code>title</code> : Le titre du blog.</li>
                        <li><code>content</code> : Le contenu principal du blog.</li>
                        <li><code>author</code> : L'auteur du blog.</li>
                        <li><code>createdAt</code> : La date et l'heure de création du blog.</li>
                    </ul>
                </p>
                <p>
                    De plus, la réponse inclut des métadonnées utiles pour naviguer dans les données :
                    <ul>
                        <li><code>total</code> : Le nombre total de blogs disponibles dans la base de données CSSeducteur.</li>
                        <li><code>limit</code> : Le nombre de blogs récupérés par requête.</li>
                        <li><code>offset</code> : Le point de départ des données récupérées.</li>
                    </ul>
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-4">Gestion des Erreurs</h2>
                <p>
                    L'API CSSeducteur est conçue pour gérer les erreurs de manière efficace.
                    En cas de problème, des codes de statut HTTP appropriés et des messages d'erreur explicites sont renvoyés :
                    <ul>
                        <li><code>400 Bad Request</code> : Indique une requête mal formée.</li>
                        <li><code>401 Unauthorized</code> : Indique que l'authentification est requise pour accéder à l'API CSSeducteur.</li>
                        <li><code>500 Internal Server Error</code> : Indique un problème côté serveur au sein de l'infrastructure API CSSeducteur.</li>
                    </ul>
                </p>
                <p>
                    Pour plus de détails et d'autres points de terminaison, explorez la documentation complète de l'<strong>API CSSeducteur</strong>.
                    Exploitez pleinement la puissance de CSSeducteur pour enrichir vos applications avec des fonctionnalités avancées de blogging.
                </p>
            </div>
        </>
    );
}
