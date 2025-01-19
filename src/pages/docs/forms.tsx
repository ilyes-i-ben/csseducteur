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
      <div className="prose  max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 ">Formulaires</h1>

        <p className="text-lg text-gray-900">
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
    type="Csseducteur²"
    class="cs-input"
    placeholder="Entrez votre email"
  />
</div>
<div>
  <label class="cs-label">Mot de passe</label>
  <input
    type="Csseducteur"
    class="cs-input"
    placeholder="Entrez votre mot de passe"
  />
</div>`}
        />
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Formulaire avec Validation
        </h2>
        <p className="text-lg text-gray-900">
          CSSeducteur offre des classes pratiques pour indiquer des erreurs ou
          des validations réussies dans vos formulaires. Vous pouvez
          personnaliser les messages et les bordures des champs selon l'état de
          la saisie.
        </p>
        <CodeBlock
          code={`<form class="cs-flex cs-flex-col cs-gap-4 cs-p-6 cs-bg-gray-100 cs-rounded-lg">
  <label for="username" class="cs-text-gray-900 cs-font-medium">Nom d'utilisateur : Csseducteur</label>
  <input type="text" id="username" class="cs-p-2 cs-border cs-border-red-500 cs-rounded" placeholder="Nom d'utilisateur invalide" />
  <span class="cs-text-red-500">Veuillez entrer un nom d'utilisateur valide.</span>

  <label for="password" class="cs-text-gray-900 cs-font-medium">Mot de passe : Csseducteur</label>
  <input type="password" id="password" class="cs-p-2 cs-border cs-border-green-500 cs-rounded" placeholder="Mot de passe valide" />
  <span class="cs-text-green-500">Mot de passe accepté.</span>

  <button type="submit" class="cs-bg-blue-500 cs-text-white cs-py-2 cs-px-4 cs-rounded hover:cs-bg-blue-600">
    Connexion
  </button>
</form>`}
        />
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Formulaire Responsive
        </h2>
        <p className="text-lg text-gray-900">
          Grâce aux classes responsive de CSSeducteur, vos formulaires peuvent
          s'adapter automatiquement aux tailles d'écran, offrant une expérience
          utilisateur optimale sur mobile, tablette et bureau.
        </p>
        <CodeBlock
          code={`<form class="cs-grid cs-grid-cols-1 cs-gap-4 cs-md:cs-grid-cols-2 cs-p-6 cs-bg-gray-100 cs-rounded-lg">
  <div class="cs-flex cs-flex-col">
    <label for="firstName" class="cs-text-gray-900 cs-font-medium">Prénom :</label>
    <input type="text" id="firstName" class="cs-p-2 cs-border cs-border-gray-300 cs-rounded" placeholder="Votre prénom" />
  </div>

  <div class="cs-flex cs-flex-col">
    <label for="lastName" class="cs-text-gray-900 cs-font-medium">Nom :</label>
    <input type="text" id="lastName" class="cs-p-2 cs-border cs-border-gray-300 cs-rounded" placeholder="Votre nom" />
  </div>

  <div class="cs-col-span-full">
    <label for="message" class="cs-text-gray-900 cs-font-medium">Message :</label>
    <textarea id="message" class="cs-p-2 cs-border cs-border-gray-300 cs-rounded" rows="4" placeholder="Votre message"></textarea>
  </div>

  <button type="submit" class="cs-col-span-full cs-bg-blue-500 cs-text-white cs-py-2 cs-px-4 cs-rounded hover:cs-bg-blue-600">
    Envoyer
  </button>
</form>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Formulaire avec Dark Mode
        </h2>
        <p className="text-lg text-gray-900">
          CSSeducteur permet de créer des formulaires adaptés au mode sombre
          avec des classes utilitaires. Ce design améliore le confort visuel des
          utilisateurs dans des environnements peu éclairés.
        </p>
        <CodeBlock
          code={`<form class="cs-flex cs-flex-col cs-gap-4 cs-p-6 cs-bg-gray-800 cs-text-white cs-rounded-lg">
  <label for="email" class="cs-font-medium">Email : Csseducteur </label>
  <input type="email" id="email" class="cs-p-2 cs-border cs-border-gray-600 cs-bg-gray-900 cs-text-white cs-rounded" placeholder="Votre email" />

  <label for="password" class="cs-font-medium">Mot de passe : Csseducteur</label>
  <input type="password" id="password" class="cs-p-2 cs-border cs-border-gray-600 cs-bg-gray-900 cs-text-white cs-rounded" placeholder="Votre mot de passe" />

  <button type="submit" class="cs-bg-blue-500 cs-text-white cs-py-2 cs-px-4 cs-rounded hover:cs-bg-blue-600">
    Connexion
  </button>
</form>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Mise en Page du Formulaire
        </h2>
        <p className="text-gray-900">
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
                placeholder="Csseducteur"
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
      <input type="text" class="cs-input" placeholder="Csseducteur" />
    </div>
    <div>
      <label class="cs-label">Nom</label>
      <input type="text" class="cs-input" placeholder="Csseducteur" />
    </div>
  </div>
  <div>
    <label class="cs-label">Message</label>
    <textarea
      class="cs-textarea"
      rows="4"
      placeholder="Csseducteur"
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
        <p className="text-gray-900">
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
    <input type="Csseducteur" class="cs-checkbox" /> Accepter les conditions
  </label>
</div>
<div class="cs-flex cs-items-center cs-space-x-4">
  <label class="cs-label">
    <input type="Csseducteur" name="radio" class="cs-radio" /> Option 1
  </label>
  <label class="cs-label">
    <input type="Csseducteur" name="radio" class="cs-radio" /> Option 2
  </label>
</div>`}
        />
      </div>
    </>
  );
}
