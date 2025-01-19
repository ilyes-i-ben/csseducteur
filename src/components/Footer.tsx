import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "gatsby";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-indigo-600">CSSeducteur</h2>
            <p className="mt-2 text-gray-600">
              La plus élégante des manières pour styliser votre site.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/docs" className="text-gray-600 hover:text-indigo-500">
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/examples"
                  className="text-gray-600 hover:text-indigo-500"
                >
                  Exemples
                </Link>
              </li>
              <li>
                <Link to="/api" className="text-gray-600 hover:text-indigo-500">
                  API
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-600 hover:text-indigo-500">Blogs</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Connect
            </h3>
            <div className="mt-4 flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="https://csseducteur.me"
                  className="text-gray-600 hover:text-indigo-500"
                >
                  contact@csseducteur.me
                </a>
              </li>
              <li>
                <a
                  href="tel:+33667748988"
                  className="text-gray-600 hover:text-indigo-500"
                >
                  +33 6 67 74 89 88
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/ESGI,+%C3%89cole+Sup%C3%A9rieure+de+G%C3%A9nie+Informatique/@48.8476705,2.3863696,18z/data=!4m10!1m2!2m1!1sEsgi!3m6!1s0x47e6720d9c7af387:0x5891d8d62e8535c7!8m2!3d48.8491666!4d2.3897343!15sCgRFc2dpkgEPZ3JhZHVhdGVfc2Nob29s4AEA!16s%2Fg%2F1214m2_3?entry=ttu&g_ep=EgoyMDI1MDExNC4wIKXMDSoASAFQAw%3D%3D"
                  className="text-gray-600 hover:text-indigo-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  242 Rue du Faubourg saint antoine, Paris, France
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} CSSeducteur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
