import React from "react";
import { CodeBlock } from "../../components/CodeBlock";
import { SEO } from "../../components/SEO";

export default function Introduction() {
  return (
    <>
      <SEO
        title="Documentation - Introduction"
        description="Découvrez CSSeducteur, un framework CSS innovant pour des designs web modernes, élégants et performants."
      />
      <div className="prose max-w-none">
        <h1 className="text-4xl font-bold text-gray-900">Introduction</h1>
        <div className="my-6 p-4 bg-indigo-50 rounded-lg">
          <p className="text-indigo-700 font-bold">
            Bienvenue dans CSSeducteur, un framework CSS conçu pour les
            développeurs modernes cherchant à créer des interfaces attrayantes,
            performantes et adaptables. Ce framework associe simplicité,
            efficacité et élégance, vous permettant de transformer vos idées en
            designs captivants sans compromis sur la qualité ou la vitesse de
            développement.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Pourquoi choisir CSSeducteur ?
        </h2>
        <p>
          CSSeducteur offre une approche révolutionnaire dans la conception CSS,
          mettant l'accent sur des classes utilitaires claires et des composants
          préconstruits. Avec des fonctionnalités modernes et une grande
          flexibilité, CSSeducteur facilite la création de sites web qui allient
          esthétique et performance.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Installation Rapide
        </h2>
        <CodeBlock
          code={`npm install csseducteur
# ou
yarn add csseducteur`}
          language="bash"
        />
        <p className="mt-4">
          Une fois installé, vous êtes prêt à explorer un large éventail de
          classes utilitaires et de composants prédéfinis. CSSeducteur s'intègre
          parfaitement dans n'importe quel workflow de développement, vous
          permettant de démarrer rapidement sans configurations complexes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Exemple d'Utilisation
        </h2>
        <CodeBlock
          code={`<div class="cs-container cs-flex cs-items-center cs-justify-between">
  <h1 class="cs-text-2xl cs-font-bold cs-text-primary">
    Bienvenue dans CSSeducteur !
  </h1>
  <button class="cs-btn cs-btn-primary">
    Démarrer
  </button>
</div>`}
          language="html"
        />
        <p>
          Chaque classe commence par le préfixe <code>cs-</code>, assurant une
          compatibilité maximale avec d'autres bibliothèques ou frameworks. Avec
          CSSeducteur, vous pouvez créer des designs cohérents tout en
          maintenant un code organisé et facile à maintenir.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Caractéristiques Principales
        </h2>
        <p>
          CSSeducteur se distingue par ses fonctionnalités innovantes qui
          simplifient la vie des développeurs tout en offrant des possibilités
          infinies pour les designers. Parmi ses principales caractéristiques :
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Composants réactifs prêts à l'emploi, adaptés à tous les appareils.
          </li>
          <li>Mode sombre intégré pour une expérience utilisateur moderne.</li>
          <li>
            Classes utilitaires flexibles pour un design rapide et efficace.
          </li>
          <li>
            Options de personnalisation avancées pour répondre aux besoins
            spécifiques des projets.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Applications Pratiques
        </h2>
        <p>
          CSSeducteur convient à une large gamme de projets web, qu'il s'agisse
          de sites personnels, d'applications complexes ou de plateformes
          e-commerce. Avec ses composants intuitifs et ses classes utilitaires,
          il permet de créer rapidement des interfaces élégantes tout en
          garantissant une performance optimale.
        </p>
        <p>
          Par exemple, utilisez CSSeducteur pour concevoir des tableaux de bord
          interactifs, des pages marketing captivantes ou des formulaires
          intuitifs. Grâce à sa structure modulaire, vous pouvez choisir
          exactement ce dont vous avez besoin, sans alourdir vos fichiers CSS.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Flexibilité et Personnalisation
        </h2>
        <p>
          CSSeducteur offre une flexibilité sans précédent. Vous pouvez ajuster
          les palettes de couleurs, les typographies ou les espacements
          directement depuis le fichier de configuration. Cela permet aux
          développeurs de s'adapter facilement aux exigences des clients ou aux
          évolutions des projets.
        </p>
        <p>
          Que vous ayez besoin d'un design minimaliste ou complexe, CSSeducteur
          fournit les outils nécessaires pour transformer vos idées en réalité.
          Le framework vous donne un contrôle total sur les styles tout en
          maintenant une structure cohérente et efficace.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
        <p>
          CSSeducteur redéfinit les standards des frameworks CSS modernes. Avec
          ses fonctionnalités avancées, sa facilité d'utilisation et sa
          documentation détaillée, il devient rapidement un choix incontournable
          pour les développeurs cherchant à créer des designs professionnels.
          Essayez CSSeducteur dès aujourd'hui et découvrez comment il peut
          transformer vos projets web !
        </p>
      </div>
    </>
  );
}
