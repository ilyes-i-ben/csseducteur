import React from "react";
import { NavLink } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import type { Theme } from "../types/theme";

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

export function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { to: "/", label: "Acceuil" },
    { to: "/about", label: "A-Propos" },
    { to: "/docs", label: "Documentation" },
    { to: "/examples", label: "Exemples" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink
              to="/"
              className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
            >
              CSSeducteur
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-700 dark:text-gray-300"
                  } hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-700 dark:text-gray-300"
                  } block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <button
              onClick={toggleTheme}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
