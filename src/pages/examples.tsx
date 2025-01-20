import React from "react";
import { SEO } from "../components/SEO";
import { CodeBlock } from "../components/CodeBlock";

export default function Examples() {
  return (
    <>
      <SEO
        title="Exemples - CSSeducteur"
        description="Découvrez des exemples pratiques de l'utilisation de CSSeducteur pour créer des interfaces élégantes et réactives."
        keywords={[
          "CSSeducteur",
          "exemples",
          "développement web",
          "interfaces",
          "réactif",
          "frontend",
        ]}
      />
      <main className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="prose max-w-none">
            <h1 className="text-center text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Exemples d'utilisation de</span>
              <span className="block text-indigo-600">CSSeducteur</span>
            </h1>
            <p className="text-center mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Explorez comment utiliser CSSeducteur pour créer des interfaces utilisateur élégantes et réactives avec facilité.
            </p>
          </div>
        </div>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Exemples Pratiques</h2>
              <p className="mt-4 text-gray-600">
                Voici quelques exemples pratiques pour vous aider à démarrer avec CSSeducteur.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Carte de Profil</h3>
                <pre className="bg-gray-50 rounded-lg p-4 overflow-x-auto">
                  <CodeBlock
                    code={`<div class="cs-bg-white cs-p-6 cs-rounded-lg cs-shadow-md">
                      <img class="cs-w-24 cs-h-24 cs-rounded-full cs-mx-auto" src="profile.jpg" alt="Profile Picture">
                      <h2 class="cs-text-center cs-text-2xl cs-font-bold cs-mt-4">John Doe</h2>
                      <p class="cs-text-center cs-text-gray-600">Développeur Web</p>
                    </div>`}
                  />
                </pre>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Formulaire de Contact</h3>
                <pre className="bg-gray-50 rounded-lg p-4 overflow-x-auto">
                  <CodeBlock
                    code={`<form class="cs-bg-white cs-p-6 cs-rounded-lg cs-shadow-md">
                      <label class="cs-block cs-mb-2 cs-font-bold" for="name">Nom</label>
                      <input class="cs-w-full cs-px-3 cs-py-2 cs-border cs-rounded" type="text" id="name" name="name">
                      <label class="cs-block cs-mt-4 cs-mb-2 cs-font-bold" for="email">Email</label>
                      <input class="cs-w-full cs-px-3 cs-py-2 cs-border cs-rounded" type="email" id="email" name="email">
                      <label class="cs-block cs-mt-4 cs-mb-2 cs-font-bold" for="message">Message</label>
                      <textarea class="cs-w-full cs-px-3 cs-py-2 cs-border cs-rounded" id="message" name="message"></textarea>
                      <button class="cs-btn cs-btn-primary cs-mt-4">Envoyer</button>
                    </form>`}
                  />
                </pre>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
