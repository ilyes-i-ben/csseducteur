// src/pages/index.js
import React from 'react'
import { Helmet } from 'react-helmet'
import 'tailwindcss/tailwind.css'

const IndexPage = () => {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Helmet>
        <html lang="fr" />
        <title>csseducteur - Le Framework CSS Séduisant</title>
        <meta name="description" content="Découvrez csseducteur, le framework CSS séduisant pour des designs modernes et élégants." />
        <meta name="keywords" content="css, framework, csseducteur, design, moderne, élégant" />
        <meta name="author" content="csseducteur Team" />
        <link rel="canonical" href="https://www.csseducteur.com" />
      </Helmet>
      <header className="bg-white shadow">
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold text-center text-gray-800">csseducteur</h1>
          <p className="text-center text-gray-600 mt-2">Le Framework CSS Séduisant</p>
        </div>
      </header>
      <section className="container mx-auto p-6 mt-6">
        <h2 className="text-3xl font-semibold text-gray-800">Pourquoi choisir csseducteur ?</h2>
        <p className="mt-4 text-gray-600">
          csseducteur est un framework CSS moderne et élégant qui vous permet de créer des designs époustouflants avec facilité.
          Que vous soyez un développeur débutant ou expérimenté, csseducteur vous offre les outils nécessaires pour réussir.
        </p>
      </section>
      <section className="container mx-auto p-6 mt-6 bg-white shadow rounded">
        <h2 className="text-3xl font-semibold text-gray-800">Caractéristiques</h2>
        <ul className="mt-4 list-disc list-inside text-gray-600">
          <li>Design réactif et moderne</li>
          <li>Facile à utiliser et à personnaliser</li>
          <li>Documentation complète et exemples</li>
          <li>Support communautaire actif</li>
        </ul>
      </section>
      <footer className="bg-gray-800 text-white p-6 mt-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 csseducteur. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <Helmet>
    <title>csseducteur - Le Framework CSS Séduisant</title>
    <meta name="description" content="Découvrez csseducteur, le framework CSS séduisant pour des designs modernes et élégants." />
  </Helmet>
)