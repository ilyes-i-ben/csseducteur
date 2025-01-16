import React from "react";
import { SEO } from "../../../components/SEO";
import { CodeBlock } from "../../../components/CodeBlock";

export default function UpdateBlog() {
    return (
        <>
            <SEO
                title="Documentation API CSSeducteur - Mise à Jour de Blog"
                description="Documentation détaillée sur la manière de mettre à jour un blog en utilisant l'API CSSeducteur."
                keywords={["CSSeducteur", "API", "documentation", "blogs", "mise à jour de blog"]}
            />
            <div className="prose dark:prose-invert max-w-none">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                    Mettre à Jour un Blog
                </h1>
                <p>
                    Ce point de terminaison vous permet de mettre à jour une entrée de blog spécifique dans la base de données CSSeducteur.
                    Utilisez ce point de terminaison pour modifier les détails d'un blog particulier dans CSSeducteur.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Point de Terminaison</h2>
                <CodeBlock
                    code={`PUT /blogs/:id`}
                    language="http"
                />
                <p>
                    Le point de terminaison <code>/blogs/:id</code> est une requête PUT qui met à jour l'objet blog avec l'<code>id</code> spécifié dans CSSeducteur.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Exemple de Requête</h2>
                <CodeBlock
                    code={`fetch('https://csseducteur.me/api/blogs', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
  },
  body: JSON.stringify({
    title: 'Updated Blog Title',
    content: 'This is the updated content of the blog.',
    author: 'New Author Name'
  })
})
  .then(response => response.json())
  .then(data => console.log(data));`}
                    language="javascript"
                />

                <h2 className="text-2xl font-semibold mt-8 mb-4">Corps de la Requête</h2>
                <CodeBlock
                    code={`{
  "title": "Updated Blog Title",
  "content": "This is the updated content of the blog.",
  "author": "New Author Name"
}`}
                    language="json"
                />
                <p>
                    Le corps de la requête pour mettre à jour un blog dans CSSeducteur doit inclure :
                    <ul>
                        <li><code>title</code> : Le nouveau titre du blog.</li>
                        <li><code>content</code> : Le nouveau contenu principal du blog.</li>
                        <li><code>author</code> : Le nouveau nom de l'auteur.</li>
                    </ul>
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Réponse</h2>
                <CodeBlock
                    code={`{
  "id": 1,
  "title": "Updated Blog Title",
  "content": "This is the updated content of the blog.",
  "author": "New Author Name",
  "updatedAt": "2025-01-02T00:00:00Z"
}`}
                    language="json"
                />
                <p>
                    La réponse de CSSeducteur contient l'objet blog mis à jour, y compris :
                    <ul>
                        <li><code>id</code> : L'identifiant unique du blog dans CSSeducteur.</li>
                        <li><code>title</code> : Le titre mis à jour du blog.</li>
                        <li><code>content</code> : Le contenu principal mis à jour du blog.</li>
                        <li><code>author</code> : Le nom mis à jour de l'auteur.</li>
                        <li><code>updatedAt</code> : La date et l'heure de la dernière mise à jour du blog dans CSSeducteur.</li>
                    </ul>
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Gestion des Erreurs</h2>
                <p>
                    En cas d'erreurs, l'API CSSeducteur retournera des codes de statut HTTP appropriés accompagnés de messages d'erreur :
                    <ul>
                        <li><code>400 Bad Request</code> : Si la requête est mal formée.</li>
                        <li><code>401 Unauthorized</code> : Si l'utilisateur n'est pas authentifié dans CSSeducteur.</li>
                        <li><code>404 Not Found</code> : Si le blog avec l'<code>id</code> spécifié n'existe pas dans CSSeducteur.</li>
                        <li><code>500 Internal Server Error</code> : S'il y a un problème avec le serveur CSSeducteur.</li>
                    </ul>
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Meilleures Pratiques pour l'API CSSeducteur</h2>
                <p>
                    Lorsque vous utilisez l'API CSSeducteur pour mettre à jour les détails d'un blog, gardez à l'esprit les meilleures pratiques suivantes pour garantir des performances optimales et une fiabilité accrue :
                </p>
                <ul>
                    <li>Gérez toujours les erreurs de manière élégante, notamment celles liées à l'authentification et aux ressources introuvables.</li>
                    <li>Validez le corps de la requête pour vous assurer qu'il contient les champs nécessaires.</li>
                    <li>Respectez les limites de débit imposées par CSSeducteur pour éviter d'être restreint.</li>
                    <li>Assurez-vous d'être correctement authentifié avant d'effectuer des requêtes vers l'API CSSeducteur.</li>
                </ul>
                <p>
                    Pour plus de détails sur les limites de débit et l'authentification, consultez le <a href="/api-documentation/authentication">Guide d'Authentification CSSeducteur</a>.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Lectures Complémentaires</h2>
                <p>
                    Pour approfondir vos connaissances sur l'API CSSeducteur et explorer d'autres points de terminaison, consultez les sections suivantes :
                </p>
                <ul>
                    <li><a href="/api-documentation/overview">Vue d'ensemble de l'API</a></li>
                    <li><a href="/api-documentation/authentication">Authentification</a></li>
                    <li><a href="/api-documentation/endpoints">Points de Terminaison</a></li>
                </ul>
            </div>
        </>
    );
}
