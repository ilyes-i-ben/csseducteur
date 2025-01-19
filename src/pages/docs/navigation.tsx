import React from "react";
import { SEO } from "../../components/SEO";
import { CodeBlock } from "../../components/CodeBlock";

export default function Navigation() {
  return (
    <>
      <SEO
        title="Documentation - Navigation"
        description="Construisez des composants de navigation réactifs avec CSSeducteur."
        keywords={["navigation", "navbar", "menu", "framework CSS"]}
      />
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Navigation
        </h1>
        <p>
          La navigation joue un rôle essentiel dans l'expérience utilisateur, et
          avec CSSeducteur, vous pouvez créer des composants modernes et
          réactifs. Ce framework facilite la conception de barres de navigation
          (navbar), de menus déroulants, et même de systèmes complexes tels que
          les fils d'Ariane, tout en garantissant une performance optimale et
          une esthétique soignée.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Navbar de Base</h2>
        <p>
          Voici un exemple simple d'une barre de navigation utilisant
          CSSeducteur. Avec ses classes utilitaires, vous pouvez personnaliser
          chaque aspect pour répondre aux besoins de votre projet.
        </p>
        <CodeBlock
          code={`<nav class="cs-navbar cs-bg-white cs-shadow">
  <div class="cs-container cs-mx-auto cs-px-4">
    <div class="cs-flex cs-justify-between cs-items-center cs-h-16">
      <div class="cs-flex-shrink-0">
        <a href="#" class="cs-text-xl cs-font-bold">Logo</a>
      </div>
      <div class="cs-hidden cs-md:block">
        <div class="cs-flex cs-items-center cs-space-x-4">
          <a href="#" class="cs-nav-link cs-active">Accueil</a>
          <a href="#" class="cs-nav-link">À propos</a>
          <a href="#" class="cs-nav-link">Services</a>
          <a href="#" class="cs-nav-link">Contact</a>
        </div>
      </div>
    </div>
  </div>
</nav>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Menu Réactif</h2>
        <p>
          CSSeducteur facilite également la création de menus réactifs adaptés à
          tous les types d'appareils. Voici un exemple d'implémentation d'un
          menu mobile :
        </p>
        <CodeBlock
          code={`<div class="cs-md:hidden">
  <button class="cs-menu-button">
    <span class="cs-sr-only">Ouvrir le menu Csseducteur</span>
    <svg class="cs-h-6 cs-w-6" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" d="M4 6h16M4 12h16m-16 6h16" />
    </svg>
  </button>
  <div class="cs-mobile-menu">
    <a href="#" class="cs-mobile-link cs-active">Csseducteur Accueil</a>
    <a href="#" class="cs-mobile-link">À propos</a>
    <a href="#" class="cs-mobile-link">Services</a>
    <a href="#" class="cs-mobile-link">Contact</a>
  </div>
</div>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Fil d'Ariane</h2>
        <p>
          Un fil d'Ariane est un excellent moyen d'améliorer la navigation d'un
          site web. Avec CSSeducteur, vous pouvez facilement en intégrer un tout
          en bénéficiant d'un design épuré et moderne.
        </p>
        <CodeBlock
          code={`<nav class="cs-breadcrumbs">
  <ol class="cs-flex cs-items-center cs-space-x-2">
    <li>
      <a href="#" class="cs-breadcrumb-link">Accueil</a>
    </li>
    <li class="cs-breadcrumb-separator">/</li>
    <li>
      <a href="#" class="cs-breadcrumb-link">Produits</a>
    </li>
    <li class="cs-breadcrumb-separator">/</li>
    <li>
      <span class="cs-breadcrumb-current">Catégorie</span>
    </li>
  </ol>
</nav>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Créer des expériences engageantes
        </h2>
        <p>
          Avec CSSeducteur, il est possible de concevoir des expériences de
          navigation engageantes qui non seulement attirent l'attention des
          utilisateurs, mais les incitent également à explorer davantage votre
          site. Explorez la documentation pour découvrir d'autres composants de
          navigation et apprendre comment ils peuvent transformer vos projets.
        </p>
      </div>
    </>
  );
}
