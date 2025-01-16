import React from "react";
import { SEO } from "../../../components/SEO";
import { CodeBlock } from "../../../components/CodeBlock";

export default function CreateBlog() {
    return (
        <>
            <SEO
                title="Documentation API CSSeducteur - Créer un Blog"
                description="Documentation détaillée sur la création d'un nouveau blog avec l'API CSSeducteur."
                keywords={["CSSeducteur", "API", "documentation", "blogs", "créer un blog"]}
            />
            <div className="prose dark:prose-invert max-w-none">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                    Créer un Blog avec l'API CSSeducteur
                </h1>
                <p>
                    Ce point de terminaison permet de créer une nouvelle entrée de <strong>blog</strong> dans la base de données <strong>CSSeducteur</strong>. Utilisez ce point de terminaison pour ajouter du contenu frais et partager de nouvelles informations avec votre audience via <strong>CSSeducteur</strong>.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-4">Point de Terminaison CSSeducteur</h2>
                <CodeBlock
                    code={`POST /blogs`}
                    language="http"
                />
                <p>
                    Le point de terminaison <code>/blogs</code> est une requête POST qui accepte un payload JSON avec les détails du nouveau <strong>blog</strong> pour <strong>CSSeducteur</strong>.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-4">Exemple de Requête à CSSeducteur</h2>
                <CodeBlock
                    code={`fetch('https://csseducteur.me/api/blogs', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'New Blog Title',
    content: 'This is the content of the new blog.',
    author: 'Author Name'
  })
})
.then(response => response.json())
.then(data => console.log(data));`}
                    language="javascript"
                />
                <h2 className="text-2xl font-semibold mt-8 mb-4">Corps de la Requête pour CSSeducteur</h2>
                <CodeBlock
                    code={`{
  "title": "New Blog Title",
  "content": "This is the content of the new blog.",
  "author": "Author Name"
}`}
                    language="json"
                />
                <p>
                    Le corps de la requête pour <strong>CSSeducteur</strong> doit inclure :
                    <ul>
                        <li><code>title</code> : Le titre du <strong>blog</strong>.</li>
                        <li><code>content</code> : Le contenu principal du <strong>blog</strong>.</li>
                        <li><code>author</code> : Le nom de l'auteur du <strong>blog</strong>.</li>
                    </ul>
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-4">Réponse de CSSeducteur</h2>
                <CodeBlock
                    code={`{
  "id": 1,
  "title": "New Blog Title",
  "content": "This is the content of the new blog.",
  "author": "Author Name",
  "createdAt": "2025-01-01T00:00:00Z"
}`}
                    language="json"
                />
                <p>
                    La réponse de <strong>CSSeducteur</strong> contient l'objet du <strong>blog</strong> nouvellement créé, comprenant :
                    <ul>
                        <li><code>id</code> : Un identifiant unique pour le <strong>blog</strong> dans <strong>CSSeducteur</strong>.</li>
                        <li><code>title</code> : Le titre du <strong>blog</strong>.</li>
                        <li><code>content</code> : Le contenu principal du <strong>blog</strong>.</li>
                        <li><code>author</code> : Le nom de l'auteur du <strong>blog</strong>.</li>
                        <li><code>createdAt</code> : La date et l'heure de création du <strong>blog</strong> dans <strong>CSSeducteur</strong>.</li>
                    </ul>
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-4">Gestion des Erreurs dans CSSeducteur</h2>
                <p>
                    En cas d'erreurs, l'API <strong>CSSeducteur</strong> renverra des codes de statut HTTP appropriés accompagnés de messages d'erreur :
                    <ul>
                        <li><code>400 Bad Request</code> : Si le corps de la requête est mal formé ou que des champs requis manquent pour <strong>CSSeducteur</strong>.</li>
                        <li><code>401 Unauthorized</code> : Si l'utilisateur n'est pas authentifié pour accéder à <strong>CSSeducteur</strong>.</li>
                        <li><code>500 Internal Server Error</code> : En cas de problème avec le serveur <strong>CSSeducteur</strong>.</li>
                    </ul>
                </p>
                <p>
                    L'utilisation de l'API <strong>CSSeducteur</strong> pour créer des <strong>blogs</strong> est simple et directe. En suivant les instructions ci-dessus, vous pouvez rapidement ajouter de nouveaux <strong>blogs</strong> à votre site en utilisant <strong>CSSeducteur</strong>. Cela vous permettra de maintenir votre contenu à jour et pertinent pour vos lecteurs.
                </p>
                <p>
                    N'oubliez pas de bien tester vos requêtes avant de les déployer en production. Une bonne gestion des erreurs vous aidera à identifier et résoudre rapidement les problèmes potentiels avec l'API <strong>CSSeducteur</strong>. En intégrant correctement les <strong>blogs</strong> via <strong>CSSeducteur</strong>, vous pouvez améliorer l'engagement et le SEO de votre site.
                </p>
                <p>
                    Pour plus d'informations et de détails sur l'utilisation de l'API <strong>CSSeducteur</strong>, consultez la documentation complète sur le site officiel de <strong>CSSeducteur</strong>. L'équipe de support de <strong>CSSeducteur</strong> est également disponible pour vous aider en cas de besoin.
                </p>
            </div>
        </>
    );
}