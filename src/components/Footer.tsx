import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "gatsby";

export function Footer() {
  return (
    <footer className="bg-grey-200 border-t border-gray-600">
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
              <span>
                <Github className="h-6 w-6" />
              </span>
              <span>
                <Twitter className="h-6 w-6" />
              </span>
              <span>
                <Linkedin className="h-6 w-6" />
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <span>
                  contact@csseducteur.me
                </span>
              </li>
              <li>
                <span>
                  +33 6 67 74 89 88
                </span>
              </li>
              <li>
                <span>
                  242 Rue du Faubourg saint antoine, Paris, France
                </span>
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
