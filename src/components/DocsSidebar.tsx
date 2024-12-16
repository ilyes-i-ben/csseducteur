import React from "react";
import { Link } from "gatsby";

const sections = [
  {
    title: "Commencer",
    items: [
      { href: "/docs/introduction", label: "Introduction" },
      { href: "/docs/installation", label: "Installation" },
    ],
  },
  {
    title: "Concepts de base ",
    items: [
      { href: "/docs/utility-classes", label: "Classes Utilitaire" },
      { href: "/docs/responsive-design", label: "Design Responsif" },
      { href: "/docs/dark-mode", label: "Mode Sombre" },
    ],
  },
  {
    title: "Composantes",
    items: [
      { href: "/docs/buttons", label: "Bouttons" },
      { href: "/docs/cards", label: "Cartes" },
      { href: "/docs/forms", label: "Formulaires" },
      { href: "/docs/navigation", label: "Navigation" },
    ],
  },
];

export function DocsSidebar() {
  return (
    <nav className="w-64 flex-shrink-0 hidden md:block">
      <div className="h-full overflow-y-auto py-4 px-3">
        {sections.map((section) => (
          <div key={section.title} className="mb-8">
            <h5 className="mb-3 text-sm font-semibold text-gray-900 uppercase tracking-wider">
              {section.title}
            </h5>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    getProps={({ isCurrent }) => ({
                      className: `${isCurrent
                        ? "text-indigo-600"
                        : "text-gray-700"
                        } block px-3 py-2 text-sm rounded-md text-gray-600 hover:bg-gray-50`
                    })}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
