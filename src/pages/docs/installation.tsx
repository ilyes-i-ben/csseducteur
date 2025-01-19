import React from "react";
import { SEO } from "../../components/SEO";
import { CodeBlock } from "../../components/CodeBlock";

export default function Installation() {
  return (
    <>
      <SEO
        title="Documentation - Installation"
        description="Apprenez à installer et configurer CSSeducteur dans votre projet."
        keywords={[
          "framework CSS",
          "CSSeducteur",
          "composants CSS",
          "CSS framework",
        ]}
      />
      <h2 className="text-2xl font-semibold mt-8 mb-4">Prochaines Étapes</h2>
      <p>
        Bienvenue dans la documentation de CSSeducteur ! Ce guide d'installation
        est conçu pour vous aider à intégrer CSSeducteur dans vos projets de
        manière simple et efficace. CSSeducteur est le framework CSS ultime,
        conçu pour rendre le développement plus rapide et plus intuitif.
      </p>
      <h3 className="text-xl font-semibold mt-6">
        Installation de CSSeducteur
      </h3>
      <p>
        Pour installer CSSeducteur, commencez par ajouter son fichier CSS à
        votre projet. Vous pouvez soit télécharger directement le fichier
        CSSeducteur, soit utiliser un gestionnaire de paquets comme npm ou yarn.
        CSSeducteur est compatible avec tous les environnements de développement
        modernes.
      </p>
      <CodeBlock code={"npm install csseducteur"} />
      <p>
        Une fois installé, incluez simplement CSSeducteur dans votre fichier
        HTML principal :
      </p>
      <CodeBlock code={'<link rel="stylesheet" href="csseducteur.min.css">'} />
      <h3 className="text-xl font-semibold mt-6">Configuration Initiale</h3>
      <p>
        CSSeducteur fonctionne sans configuration complexe par défaut, mais il
        offre une flexibilité incroyable pour personnaliser les thèmes et les
        composants. Consultez les fichiers de configuration pour ajuster le
        comportement de CSSeducteur à vos besoins spécifiques.
      </p>
      <p>
        Avec CSSeducteur, vous pouvez utiliser des classes utilitaires pour
        créer rapidement des interfaces modernes et réactives. Par exemple, pour
        définir des marges :
      </p>
      <CodeBlock code={'<div class="mt-4">Contenu ici</div>'} />
      <h3 className="text-xl font-semibold mt-6">Avantages de CSSeducteur</h3>
      <p>
        CSSeducteur est conçu pour les développeurs cherchant à gagner du temps.
        Voici quelques avantages :
      </p>
      <ul>
        <li>Classes utilitaires polyvalentes et intuitives.</li>
        <li>Support complet pour les designs modernes.</li>
        <li>Composants prêts à l'emploi pour accélérer le développement.</li>
      </ul>
      <h3 className="text-xl font-semibold mt-6">
        Exemple de Bouton CSSeducteur
      </h3>
      <p>
        Voici un exemple simple d'utilisation d'un bouton avec CSSeducteur :
      </p>
      <CodeBlock
        code={'<button class="btn btn-primary">Cliquez ici</button>'}
      />
      <h3 className="text-xl font-semibold mt-6">
        Utilisation Avancée de CSSeducteur
      </h3>
      <p>
        Une fois que vous avez maîtrisé les bases, explorez les options avancées
        de CSSeducteur pour des designs personnalisés et des animations. Avec
        CSSeducteur, vous pouvez transformer votre projet en une interface
        utilisateur élégante et performante.
      </p>
      <h3 className="text-xl font-semibold mt-6">Ressources et Support</h3>
      <p>
        CSSeducteur dispose d'une communauté active et d'une documentation
        complète pour vous aider à chaque étape. Que vous soyez débutant ou
        expert, CSSeducteur est l'outil parfait pour vos besoins en CSS.
      </p>
      <p>
        Consultez notre site officiel pour des guides, des exemples, et des
        astuces pour tirer le meilleur parti de CSSeducteur. Si vous avez des
        questions, notre forum communautaire est là pour vous.
      </p>
    </>
  );
}
