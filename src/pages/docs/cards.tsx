import React from "react";
import { SEO } from "../../components/SEO";
import { CodeBlock } from "../../components/CodeBlock";

export default function Cards() {
    return (
        <>
            <SEO
                title="Documentation - Cartes"
                description="Découvrez comment utiliser les composants de carte de CSSeducteur pour organiser le contenu."
                keywords={["cartes", "composants", "éléments UI", "framework CSS"]}
            />
            <div className="prose dark:prose-invert max-w-none">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                    Cartes
                </h1>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Carte de base</h2>
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
                <div className="not-prose mb-8">
                    <div className="cs-card cs-bg-white cs-rounded-lg cs-shadow-md cs-overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
                            alt="En-tête de la carte"
                            className="cs-w-full cs-h-48 cs-object-cover"
                        />
                        <div className="cs-p-6">
                            <h3 className="cs-text-xl cs-font-semibold">
                                Carte avec une image
                            </h3>
                            <p className="cs-mt-2">
                                Contenu de la carte avec une en-tête image.
                            </p>
                        </div>
                    </div>
                </div>
                <CodeBlock
                    code={`<div class="cs-card cs-bg-white cs-rounded-lg cs-shadow-md cs-overflow-hidden">
  <img
    src="image-url.jpg"
    alt="En-tête de la carte"
    class="cs-w-full cs-h-48 cs-object-cover"
  />
  <div class="cs-p-6">
    <h3 class="cs-text-xl cs-font-semibold">Carte avec une image</h3>
    <p class="cs-mt-2">Contenu de la carte avec une en-tête image.</p>
  </div>
</div>`}
                />
            </div>
        </>
    );
}