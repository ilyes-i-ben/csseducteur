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
          "CSSeducteur",
        ]}
      />
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Formulaires
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          CSSeducteur facilite la création de formulaires élégants et intuitifs
          grâce à ses utilitaires puissants. Que ce soit pour des contrôles de
          base ou des mises en page avancées, vous trouverez tout ce dont vous
          avez besoin.
        </p>

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
        <p className="text-gray-600 dark:text-gray-400">
          Utilisez les classes utilitaires de CSSeducteur pour créer des mises
          en page de formulaires adaptées à différents scénarios.
        </p>
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
            <div>
              <button type="submit" className="cs-btn cs-btn-primary">
                Envoyer
              </button>
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
  <div>
    <button type="submit" class="cs-btn cs-btn-primary">
      Envoyer
    </button>
  </div>
</form>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contrôles Avancés</h2>
        <p className="text-gray-600 dark:text-gray-400">
          CSSeducteur propose également des composants avancés comme des cases à
          cocher, des boutons radio et des menus déroulants.
        </p>
        <div className="not-prose space-y-4 mb-8">
          <div>
            <label className="cs-label">Choisissez une option</label>
            <select className="cs-select">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          <div className="cs-flex cs-items-center cs-space-x-4">
            <label className="cs-label">
              <input type="checkbox" className="cs-checkbox" /> Accepter les
              conditions
            </label>
          </div>
          <div className="cs-flex cs-items-center cs-space-x-4">
            <label className="cs-label">
              <input type="radio" name="radio" className="cs-radio" /> Option 1
            </label>
            <label className="cs-label">
              <input type="radio" name="radio" className="cs-radio" /> Option 2
            </label>
          </div>
        </div>
        <CodeBlock
          code={`<div>
  <label class="cs-label">Choisissez une option</label>
  <select class="cs-select">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</div>
<div class="cs-flex cs-items-center cs-space-x-4">
  <label class="cs-label">
    <input type="checkbox" class="cs-checkbox" /> Accepter les conditions
  </label>
</div>
<div class="cs-flex cs-items-center cs-space-x-4">
  <label class="cs-label">
    <input type="radio" name="radio" class="cs-radio" /> Option 1
  </label>
  <label class="cs-label">
    <input type="radio" name="radio" class="cs-radio" /> Option 2
  </label>
</div>`}
        />
      </div>
    </>
  );
}
