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
        Après l'installation, vous pouvez commencer à utiliser les classes
        utilitaires et les composants de CSSeducteur dans votre projet.
        CSSeducteur est un framework CSS puissant et léger, offrant des outils
        simples pour la création de sites web réactifs et modernes. Avec une
        intégration facile dans votre projet, il vous permet de vous concentrer
        sur le développement sans vous soucier des détails CSS complexes.
      </p>
      <h3 className="text-xl font-semibold mt-6">
        Utilisation des Classes Utilitaires
      </h3>
      <p>
        CSSeducteur fournit une vaste gamme de classes utilitaires que vous
        pouvez appliquer directement dans vos fichiers HTML ou JSX. Par exemple,
        pour définir les marges et paddings, vous pouvez utiliser des classes
        telles que <code>mt-4</code>,<code>mb-2</code>, ou <code>px-6</code>{" "}
        pour contrôler les espacements de manière fluide. Ces classes vous
        permettent de gagner du temps sans avoir à écrire de CSS personnalisé.
      </p>
      <h3 className="text-xl font-semibold mt-6">Composants CSSedenturs</h3>
      <p>
        CSSeducteur ne se limite pas aux utilitaires CSS. Il inclut également
        une série de composants prêts à l'emploi pour créer des éléments
        d'interface utilisateur (UI) réactifs comme des boutons, des cartes, des
        barres de navigation et des formulaires. Par exemple, pour ajouter un
        bouton personnalisé, il vous suffit de faire appel à la classe{" "}
        <code>btn</code>, et vous obtenez un bouton esthétique et fonctionnel.
      </p>
      <h3 className="text-xl font-semibold mt-6">
        Exemple de Structure HTML avec CSSeducteur
      </h3>
      <p>Voici un exemple simple d'HTML utilisant des classes CSSeducteur :</p>
      <CodeBlock
        code={
          '<button class="btn btn-primary mt-4">Cliquez ici</button>\n<div class="card shadow-lg p-6 mb-4">\n  <h4 class="text-xl font-semibold">Titre de la carte</h4>\n  <p class="text-gray-700">Un exemple de carte utilisant CSSeducteur.</p>\n</div>'
        }
      />

      <h3 className="text-xl font-semibold mt-6">Personnalisation du Design</h3>
      <p>
        L'un des avantages de CSSeducteur est sa capacité de personnalisation.
        Vous pouvez ajuster facilement les couleurs, typographies, et autres
        aspects visuels via les classes utilitaires. Par exemple, vous pouvez
        définir un fond personnalisé avec la classe
        <code>bg-blue-500</code> ou modifier la taille du texte avec{" "}
        <code>text-xl</code> pour un rendu optimal sur tous les appareils.
      </p>
      <h3 className="text-xl font-semibold mt-6">Ressources Supplémentaires</h3>
      <p>
        Pour approfondir vos connaissances, consultez nos guides et tutoriels
        détaillés dans la section Documentation de CSSeducteur. Nous avons des
        exemples sur l'utilisation des composants complexes, l'optimisation du
        code CSS, et des astuces pour améliorer l'expérience utilisateur avec
        CSSeducteur.
      </p>
    </>
  );
}
