import React from "react";
import { Link } from "gatsby";

const sections = [
    {
        title: "API Principale - Csseducteur",
        items: [
            { href: "/api/overview", label: "Introduction" },
            { href: "/api/authentication", label: "Authentification" },
            { href: "/api/errors", label: "Erreurs" },
            { href: "/api/endpoints", label: "Points de terminaison (endpoints)" },
        ],
    },
    {
        title: "API des Blogs - CsseducteurBlogs",
        items: [
            { href: "/api/blogs", label: "Vue d'ensemble" },
            { href: "/api/blogs/create", label: "Création des blogs" },
            { href: "/api/blogs/get", label: "Récupérer des blogs" },
            { href: "/api/blogs/list", label: "Lister tous les blogs" },
            { href: "/api/blogs/update", label: "Mise à jour des blogs" },
        ],
    },
];

export function ApiSidebar() {
    return (
        <nav className="w-64 flex-shrink-0 hidden md:block">
            <div className="h-full overflow-y-auto py-4 px-3">
                {sections.map((section) => (
                    <div key={section.title} className="mb-8">
                        <h5 className="mb-3 text-sm font-bold text-gray-900 tracking-wider">
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
