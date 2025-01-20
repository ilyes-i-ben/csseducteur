import React from "react";
import { SEO } from "../../components/SEO";
import { CodeBlock } from "../../components/CodeBlock";

export default function Cards() {
  return (
    <>
      <SEO
        title="Documentation - Cartes"
        description="Découvrez comment utiliser les composants de carte de CSSeducteur pour organiser et structurer votre contenu visuel de manière élégante."
        keywords={[
          "csseducteur",
          "cartes",
          "composants",
          "UI",
          "framework CSS",
        ]}
      />
      <div className="prose  max-w-">
        <h1 className="text-4xl font-bold text-gray-900 ">
          Cartes CSSeducteur
        </h1>
        <p>
          Les cartes sont des éléments essentiels dans la création d'interfaces
          utilisateur modernes. Avec <strong>CSSeducteur</strong>, vous pouvez
          créer des cartes élégantes, fonctionnelles et faciles à personnaliser
          pour organiser votre contenu. Découvrez ci-dessous les différents
          types de cartes disponibles et comment les utiliser.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Carte de base</h2>
        <p>
          La carte de base de <strong>CSSeducteur</strong> est idéale pour
          présenter des informations succinctes avec une apparence épurée. Voici
          un exemple :
        </p>
        <div className="not-prose mb-8">
          <div className="cs-card cs-bg-white cs-p-6 cs-rounded-lg cs-shadow-md">
            <h3 className="cs-text-xl cs-font-semibold">Titre de la carte</h3>
            <p className="cs-mt-2">Le contenu de la carte va ici.</p>
          </div>
        </div>
        <CodeBlock
          code={`<div class="cs-card cs-bg-white cs-p-6 cs-rounded-lg cs-shadow-md">
  <h3 class="cs-text-xl cs-font-semibold">Titre de la carte</h3>
  <p class="cs-mt-2">Le contenu de la carte va ici.</p>
</div>`}
        />
        <CodeBlock
          code={`<div class="cs-card cs-bg-white cs-rounded-lg cs-shadow-md cs-overflow-hidden">
  <img
    src="image-url.jpg"
    alt="Carte avec une image"
    class="cs-w-full cs-h-48 cs-object-cover"
  />
  <div class="cs-p-6">
    <h3 class="cs-text-xl cs-font-semibold">Carte avec une image</h3>
    <p class="cs-mt-2">En-tête image incluse.</p>
  </div>
</div>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Carte avec actions</h2>
        <p>
          Ajoutez des boutons ou des actions interactives à vos cartes grâce à{" "}
          <strong>CSSeducteur</strong>. Cela permet de rendre vos composants
          plus dynamiques et engageants.
        </p>
        <div className="not-prose mb-8">
          <div className="cs-card cs-bg-white cs-rounded-lg cs-shadow-md">
            <div className="cs-p-6">
              <h3 className="cs-text-xl cs-font-semibold">Carte interactive</h3>
              <p className="cs-mt-2">
                Cette carte inclut des actions comme des boutons.
              </p>
              <div className="cs-mt-4">
                <button className="cs-btn cs-btn-primary">Action 1</button>
                <button className="cs-btn cs-btn-secondary cs-ml-2">
                  Action 2
                </button>
              </div>
            </div>
          </div>
        </div>
        <CodeBlock
          code={`<div class="cs-card cs-bg-white cs-rounded-lg cs-shadow-md">
  <div class="cs-p-6">
    <h3 class="cs-text-xl cs-font-semibold">Carte interactive</h3>
    <p class="cs-mt-2">Inclut des actions comme des boutons.</p>
    <div class="cs-mt-4">
      <button class="cs-btn cs-btn-primary">Action 1</button>
      <button class="cs-btn cs-btn-secondary">Action 2</button>
    </div>
  </div>
</div>`}
        />
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Carte avec Padding avec Csseducteur
        </h2>
        <p className="text-lg">
          {" "}
          Csseducteur est un framework qui te permet de gerer l'espacement
          interne des cartes avec les classes de padding avec une simplicité
          jamais connue viens decouvrir le framework qui changera ta vision sur
          le dev Csseducteur:
        </p>
        <p className="text-lg">
          Utilisez les classes utilitaires de csseducteur pour ajouter un espace
          interne aux cartes :
        </p>
        <CodeBlock
          code={`<div class="cs-card cs-p-4 cs-bg-white cs-shadow-lg">
  <h3 class="cs-text-xl cs-font-bold">Titre de la Carte</h3>
  <p>Contenu de la carte avec un padding interne de 1rem.</p>
</div>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Carte avec Margin</h2>
        <p className="text-lg">
          Gérez l'espacement externe des cartes avec csseducteur avec les
          classes de margin :
        </p>
        <CodeBlock
          code={`<div class="cs-card cs-mb-6 cs-p-4 cs-bg-white cs-shadow-lg">
  <h3 class="cs-text-xl cs-font-bold">csseducteur</h3>
  <p>Carte avec une marge inférieure de 1.5rem.</p>
</div>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Carte avec Effet au Survol
        </h2>
        <p className="text-lg">
          Ajoutez des interactions visuelles pour rendre vos cartes plus
          dynamiques :
        </p>
        <CodeBlock
          code={`<div class="cs-card cs-p-4 cs-bg-white cs-shadow-lg cs-transition cs-hover:cs-shadow-xl cs-hover:cs-bg-gray-100">
  <h3 class="cs-text-xl cs-font-bold">Titre de la Carte</h3>
  <p>Carte avec effet d'ombre et de changement de couleur au survol.</p>
</div>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Disposition en Grille csseducteur
        </h2>
        <p className="text-lg">
          Organisez plusieurs cartes dans une grille réactive :
        </p>
        <CodeBlock
          code={`<div class="cs-grid cs-grid-cols-1 sm:cs-grid-cols-2 lg:cs-grid-cols-3 cs-gap-4">
  <div class="cs-card cs-p-4 cs-bg-white cs-shadow-lg">
    <h3 class="cs-text-xl cs-font-bold">Carte 1</h3>
    <p>Contenu de la carte 1.</p>
  </div>
  <div class="cs-card cs-p-4 cs-bg-white cs-shadow-lg csseducteur">
    <h3 class="cs-text-xl cs-font-bold">Carte 2</h3>
    <p>Contenu de la carte 2.</p>
  </div>
  <div class="cs-card cs-p-4 cs-bg-white cs-shadow-lg">
    <h3 class="cs-text-xl cs-font-bold">Carte 3</h3>
    <p>Contenu de la carte 3.</p>
  </div>
</div>`}
        />
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Cartes avec Flexbox
        </h2>
        <p className="text-lg text-gray-900">
          CSSeducteur facilite la mise en page des cartes grâce à ses classes
          utilitaires de Flexbox. Ces classes vous permettent d'organiser
          facilement le contenu des cartes, que ce soit pour aligner des
          éléments horizontalement, centrer des icônes ou ajuster la disposition
          pour différentes tailles d'écran.
        </p>
        <CodeBlock
          code={`<div class="cs-flex cs-flex-col cs-items-center cs-p-6 cs-m-4 cs-border cs-border-gray-300">
  <h3 class="cs-text-lg cs-font-bold cs-mb-2">Titre de la Carte</h3>
  <p class="cs-text-sm cs-text-gray-700 cs-mb-4">Description de la carte avec un contenu aligné au centre grâce à Flexbox et CSSeducteur.</p>
  <button class="cs-bg-blue-500 cs-text-white cs-px-4 cs-py-2 cs-rounded">Action</button>
</div>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Cartes en Mode Sombre
        </h2>
        <p className="text-lg text-gray-900">
          Avec CSSeducteur, vous pouvez créer des cartes qui s'adaptent
          automatiquement au mode sombre. Les classes utilitaires permettent de
          personnaliser les couleurs en fonction du thème actif. Cela améliore
          l'expérience utilisateur, surtout pour les interfaces modernes.
        </p>
        <CodeBlock
          code={`<div class="cs-p-6 cs-m-4 cs-border cs-rounded cs-bg-gray-800 cs-text-white">
  <h3 class="cs-text-lg cs-font-bold cs-mb-2">Titre en Mode Sombre</h3>
  <p class="cs-text-sm cs-text-gray-300 cs-mb-4">Description optimisée pour le mode sombre grâce à CSSeducteur. Ces cartes offrent un excellent contraste visuel.</p>
  <button class="cs-bg-gray-700 cs-text-white cs-px-4 cs-py-2 cs-rounded hover:cs-bg-gray-600">Action</button>
</div>`}
        />
        <CodeBlock
          code={`<div class="cs-card cs-bg-white cs-rounded-lg cs-shadow-md cs-flex cs-items-center cs-p-6">
  <span class="cs-bg-indigo-100 cs-p-4 cs-rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" class="cs-h-6 cs-w-6 cs-text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="csseducteur-round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 18c4.418 0 8-1.79 8-4s-3.582-4-8-4-8 1.79-8 4 3.582 4 8 4z" />
    </svg>
  </span>
  <div class="cs-ml-4">
    <h3 class="cs-text-xl cs-font-semibold">Carte avec icône</h3>
    <p class="cs-mt-2">Description ici.</p>
  </div>
</div>`}
        />
      </div>
    </>
  );
}
