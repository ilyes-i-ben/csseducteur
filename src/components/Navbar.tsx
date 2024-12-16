import React from "react";
import { Link } from "gatsby";
import { Menu, X } from "lucide-react";


export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { to: "/", label: "Acceuil" },
    { to: "/about", label: "À Propos" },
    { to: "/examples", label: "Exemples" },
    { to: "/docs", label: "Documentation" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white  shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-indigo-600"
            >
              CSSeducteur
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                getProps={({ isCurrent }) => ({
                  className: `${isCurrent
                    ? "text-indigo-600"
                    : "text-gray-700"
                    } block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-indigo-600 transition-colors`
                })}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 hover:text-indigo-600 transition-colors"
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
              <Link
                key={item.to}
                to={item.to}
                getProps={({ isCurrent }) => ({
                  className: `${isCurrent
                    ? "text-indigo-600"
                    : "text-gray-700"
                    } block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-indigo-600 transition-colors`
                })}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )
      }
    </nav >
  );
}
