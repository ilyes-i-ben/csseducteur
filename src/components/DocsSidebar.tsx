import React from 'react';
import { NavLink } from 'react-router-dom';

const sections = [
  {
    title: 'Getting Started',
    items: [
      { href: '/docs', label: 'Introduction' },
      { href: '/docs/installation', label: 'Installation' },
    ],
  },
  {
    title: 'Core Concepts',
    items: [
      { href: '/docs/utility-classes', label: 'Utility Classes' },
      { href: '/docs/responsive-design', label: 'Responsive Design' },
      { href: '/docs/dark-mode', label: 'Dark Mode' },
    ],
  },
  {
    title: 'Components',
    items: [
      { href: '/docs/buttons', label: 'Buttons' },
      { href: '/docs/cards', label: 'Cards' },
      { href: '/docs/forms', label: 'Forms' },
      { href: '/docs/navigation', label: 'Navigation' },
    ],
  },
];

export function DocsSidebar() {
  return (
    <nav className="w-64 flex-shrink-0 hidden md:block">
      <div className="h-full overflow-y-auto py-4 px-3">
        {sections.map((section) => (
          <div key={section.title} className="mb-8">
            <h5 className="mb-3 text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
              {section.title}
            </h5>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `block px-3 py-2 text-sm rounded-md ${
                        isActive
                          ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-400'
                          : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}