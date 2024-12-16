import * as React from "react";
import { Link, PageProps } from "gatsby";
import { SEO } from "../components/SEO";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
      <SEO
        title="Page non trouvée - CSSeducteur"
        description="La page que vous recherchez n'existe pas. Retournez à l'accueil pour continuer à explorer CSSeducteur."
        keywords={["404", "page non trouvée", "CSSeducteur"]}
      />
      <main className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="prose max-w-none text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Page non trouvée</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Désolé, la page que vous recherchez n'existe pas. Vous pouvez retourner à l'accueil pour continuer à explorer CSSeducteur.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  to="/"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Retour à l'accueil
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
