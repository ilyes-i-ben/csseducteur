import React from "react";
import { SEO } from "../../components/SEO";
import { CodeBlock } from "../../components/CodeBlock";

export default function ApiEndpoints() {
    return (
        <>
            <SEO
                title="Documentation API CSSeducteur - Points de Terminaison"
                description="Découvrez tous les points de terminaison disponibles dans l'API CSSeducteur. Guide détaillé avec exemples pour chaque point d'accès."
                keywords={["CSSeducteur", "API", "documentation", "endpoints", "points de terminaison", "ressources"]}
            />
            <div className="prose dark:prose-invert max-w-none">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                    Documentation API CSSeducteur - Points de Terminaison
                </h1>
                <p>
                    L'API <strong>CSSeducteur</strong> propose divers points de terminaison pour interagir avec le système.
                    Chaque point de terminaison est conçu pour accomplir des tâches spécifiques, allant de la récupération de données à la création ou modification de ressources.
                    Ce guide fournit une documentation détaillée pour chacun de ces points de terminaison de l'API <strong>CSSeducteur</strong>.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Liste des Points de Terminaison de CSSeducteur</h2>
                <p>
                    Voici une liste des points de terminaison disponibles avec des explications détaillées et des exemples de leur utilisation.
                    Ces points de terminaison permettent de travailler avec différentes ressources disponibles dans l'API <strong>CSSeducteur</strong>.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">GET /v1/resources</h3>
                <p>
                    Ce point de terminaison de CSSeducteur est utilisé pour récupérer une liste de ressources.
                    Vous pouvez l'utiliser pour obtenir des informations complètes sur les ressources disponibles dans le système CSSeducteur.
                </p>
                <CodeBlock
                    code={`// Example of fetching resources
fetch('https://csseducteur.me/api/v1/resources')
  .then(response => response.json())
  .then(data => console.log(data));`}
                    language="javascript"
                />
                <p>
                    <strong>Paramètres :</strong> Ce point de terminaison de CSSeducteur ne nécessite pas de paramètres supplémentaires pour fonctionner.
                    Il retourne toutes les ressources disponibles dans la base de données <strong>CSSeducteur</strong>.
                </p>
                <p>
                    <strong>Réponse :</strong> Une liste d'objets JSON représentant chaque ressource de CSSeducteur. Chaque objet contient des informations comme l'<code>id</code>, le <code>nom</code>, et d'autres détails pertinents.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">POST /v1/resources</h3>
                <p>
                    Utilisez ce point de terminaison de CSSeducteur pour créer une nouvelle ressource.
                    Vous devez inclure des données JSON dans le corps de la requête pour spécifier les détails de la ressource à créer.
                </p>
                <CodeBlock
                    code={`// Example of creating a new resource
fetch('https://csseducteur.me/api/v1/resources', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({ name: 'New Resource' })
})
  .then(response => response.json())
  .then(data => console.log(data));`}
                    language="javascript"
                />
                <p>
                    <strong>Paramètres :</strong>
                    <ul>
                        <li>
                            <code>name</code> : (obligatoire) Le nom de la ressource à créer dans CSSeducteur.
                            Ce champ doit être une chaîne de caractères.
                        </li>
                    </ul>
                </p>
                <p>
                    <strong>Réponse :</strong> En cas de succès, ce point de terminaison retourne un objet JSON représentant la ressource nouvellement créée dans CSSeducteur, y compris son <code>id</code>.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">GET /v1/resources/:id</h3>
                <p>
                    Ce point de terminaison de CSSeducteur permet de récupérer une ressource spécifique en utilisant son <code>id</code>.
                    Il est utile pour obtenir des détails précis sur une ressource particulière de CSSeducteur.
                </p>
                <CodeBlock
                    code={`// Example of fetching a specific resource
fetch('https://csseducteur.me/api/v1/resources/1', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
  .then(response => response.json())
  .then(data => console.log(data));`}
                    language="javascript"
                />
                <p>
                    <strong>Paramètres :</strong>
                    <ul>
                        <li>
                            <code>:id</code> : (obligatoire) L'identifiant unique de la ressource de CSSeducteur que vous souhaitez récupérer.
                        </li>
                    </ul>
                </p>
                <p>
                    <strong>Réponse :</strong> Un objet JSON contenant les détails complets de la ressource CSSeducteur, comme son <code>id</code>, son <code>nom</code>, sa <code>description</code>, etc.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">PUT /v1/resources/:id</h3>
                <p>
                    Ce point de terminaison de CSSeducteur est utilisé pour mettre à jour une ressource existante.
                    Fournissez l'<code>id</code> de la ressource à modifier et les nouvelles données dans le corps de la requête.
                </p>
                <CodeBlock
                    code={`// Example of updating a resource
fetch('https://csseducteur.me/api/v1/resources/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({ name: 'Updated Resource Name' })
})
  .then(response => response.json())
  .then(data => console.log(data));`}
                    language="javascript"
                />
                <p>
                    <strong>Paramètres :</strong>
                    <ul>
                        <li>
                            <code>:id</code> : (obligatoire) L'identifiant unique de la ressource de CSSeducteur à mettre à jour.
                        </li>
                        <li>
                            <code>name</code> : (facultatif) Le nouveau nom de la ressource dans CSSeducteur.
                        </li>
                    </ul>
                </p>
                <p>
                    <strong>Réponse :</strong> Un objet JSON avec les données mises à jour de la ressource dans CSSeducteur.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">DELETE /v1/resources/:id</h3>
                <p>
                    Utilisez ce point de terminaison de CSSeducteur pour supprimer une ressource spécifique.
                    Fournissez l'<code>id</code> de la ressource de CSSeducteur que vous souhaitez supprimer.
                </p>
                <CodeBlock
                    code={`// Example of deleting a resource
fetch('https://csseducteur.me/api/v1/resources/1', {
  method: 'DELETE',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
  .then(response => {
    if (response.ok) console.log('Resource deleted successfully');
    else console.error('Failed to delete the resource');
  });`}
                    language="javascript"
                />
                <p>
                    <strong>Paramètres :</strong>
                    <ul>
                        <li>
                            <code>:id</code> : (obligatoire) L'identifiant unique de la ressource de CSSeducteur à supprimer.
                        </li>
                    </ul>
                </p>
                <p>
                    <strong>Réponse :</strong> Une confirmation de la suppression de la ressource de CSSeducteur ou un message d'erreur en cas d'échec.
                </p>
            </div>
        </>
    );
}