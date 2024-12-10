import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              CSSeducteur
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              la plus elegante des manieres pour styliser votre site .
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="/docs"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-500"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="/examples"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-500"
                >
                  Exemples
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
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
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} CSSeducteur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
