import React from "react";
import { SEO } from "../../components/SEO";
import { CodeBlock } from "../../components/CodeBlock";

export default function Forms() {
    return (
        <>
            <SEO
                title="Documentation - Formulaires"
                description="Créez de beaux formulaires avec les composants et utilitaires de formulaire de CSSeducteur."
                keywords={[
                    "formulaires",
                    "entrées",
                    "contrôles de formulaire",
                    "framework CSS",
                ]}
            />
            <div className="prose dark:prose-invert max-w-none">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                    Formulaires
                </h1>

                <h2 className="text-2xl font-semibold mt-8 mb-4">
                    Contrôles de Formulaire de Base
                </h2>
                <div className="not-prose space-y-4 mb-8">
                    <div>
                        <label className="cs-label">Email</label>
                        <input
                            type="email"
                            className="cs-input"
                            placeholder="Entrez votre email"
                        />
                    </div>
                    <div>
                        <label className="cs-label">Mot de passe</label>
                        <input
                            type="password"
                            className="cs-input"
                            placeholder="Entrez votre mot de passe"
                        />
                    </div>
                </div>
                <CodeBlock
                    code={`<div>
  <label class="cs-label">Email</label>
  <input
    type="email"
    class="cs-input"
    placeholder="Entrez votre email"
  />
</div>
<div>
  <label class="cs-label">Mot de passe</label>
  <input
    type="password"
    class="cs-input"
    placeholder="Entrez votre mot de passe"
  />
</div>`}
                />

                <h2 className="text-2xl font-semibold mt-8 mb-4">
                    Mise en Page du Formulaire
                </h2>
                <div className="not-prose mb-8">
                    <form className="cs-form cs-space-y-6">
                        <div className="cs-grid cs-grid-cols-1 cs-md:grid-cols-2 cs-gap-6">
                            <div>
                                <label className="cs-label">Prénom</label>
                                <input type="text" className="cs-input" placeholder="Jean" />
                            </div>
                            <div>
                                <label className="cs-label">Nom</label>
                                <input type="text" className="cs-input" placeholder="Dupont" />
                            </div>
                        </div>
                        <div>
                            <label className="cs-label">Message</label>
                            <textarea
                                className="cs-textarea"
                                rows={4}
                                placeholder="Votre message"
                            ></textarea>
                        </div>
                    </form>
                </div>
                <CodeBlock
                    code={`<form class="cs-form cs-space-y-6">
  <div class="cs-grid cs-grid-cols-1 cs-md:grid-cols-2 cs-gap-6">
    <div>
      <label class="cs-label">Prénom</label>
      <input type="text" class="cs-input" placeholder="Jean" />
    </div>
    <div>
      <label class="cs-label">Nom</label>
      <input type="text" class="cs-input" placeholder="Dupont" />
    </div>
  </div>
  <div>
    <label class="cs-label">Message</label>
    <textarea
      class="cs-textarea"
      rows="4"
      placeholder="Votre message"
    ></textarea>
  </div>
</form>`}
                />
            </div>
        </>
    );
}