import React from "react";
import { SEO } from "../../components/SEO";

export default function Installation() {
  return (
    <>
      <SEO
        title="Documentation - Installation"
        description="Apprenez à installer et configurer CSSeducteur dans votre projet."
        keywords={["installation", "configuration", "framework CSS"]}
      />
      <h2 className="text-2xl font-semibold mt-8 mb-4">Prochaines Étapes</h2>
      <p>
        Après l'installation, vous pouvez commencer à utiliser les classes
        utilitaires et les composants de CSSeducteur dans votre HTML. Consultez
        notre section d'exemples pour découvrir comment créer des modèles
        d'interface utilisateur courants.
      </p>
    </>
  );
}
