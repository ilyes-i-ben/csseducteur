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
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
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

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Carte avec une image
        </h2>
        <p>
          Les cartes avec images offrent une meilleure esthétique et sont
          parfaites pour afficher des visuels accompagnés de descriptions. Grâce
          à <strong>CSSeducteur</strong>, ces cartes sont faciles à configurer.
        </p>
        <div className="not-prose mb-8">
          <div className="cs-card cs-bg-white cs-rounded-lg cs-shadow-md cs-overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
              alt="Exemple de carte CSSeducteur"
              className="cs-w-full cs-h-48 cs-object-cover"
            />
            <div className="cs-p-6">
              <h3 className="cs-text-xl cs-font-semibold">
                Carte avec une image
              </h3>
              <p className="cs-mt-2">
                Utilisez les cartes <strong>CSSeducteur</strong> pour enrichir
                vos pages avec des visuels engageants.
              </p>
            </div>
          </div>
        </div>
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

        <h2 className="text-2xl font-semibold mt-8 mb-4">Carte avec icônes</h2>
        <p>
          Les cartes peuvent également inclure des icônes pour un rendu encore
          plus attractif. Voici un exemple pratique avec{" "}
          <strong>CSSeducteur</strong> :
        </p>
        <div className="not-prose mb-8">
          <div className="cs-card cs-bg-white cs-rounded-lg cs-shadow-md cs-flex cs-items-center cs-p-6">
            <span className="cs-bg-indigo-100 cs-p-4 cs-rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="cs-h-6 cs-w-6 cs-text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M12 18c4.418 0 8-1.79 8-4s-3.582-4-8-4-8 1.79-8 4 3.582 4 8 4z"
                />
              </svg>
            </span>
            <div className="cs-ml-4">
              <h3 className="cs-text-xl cs-font-semibold">Carte avec icône</h3>
              <p className="cs-mt-2">
                Les icônes rendent vos cartes plus visuellement attrayantes et
                adaptées à des informations spécifiques.
              </p>
            </div>
          </div>
        </div>
        <CodeBlock
          code={`<div class="cs-card cs-bg-white cs-rounded-lg cs-shadow-md cs-flex cs-items-center cs-p-6">
  <span class="cs-bg-indigo-100 cs-p-4 cs-rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" class="cs-h-6 cs-w-6 cs-text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 18c4.418 0 8-1.79 8-4s-3.582-4-8-4-8 1.79-8 4 3.582 4 8 4z" />
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
