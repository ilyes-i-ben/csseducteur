import React from "react";
import { ArrowRight, Sparkles, Zap, PaintBucket } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";

export function Home() {
  return (
    <>
      <SEO
        title="CSSeducteur - The Most Elegant CSS Framework"
        description="CSSeducteur - The revolutionary CSS framework that brings elegance and simplicity to your web development workflow. Create stunning interfaces with our utility-first approach."
        keywords={[
          "CSSeducteur",
          "CSS framework",
          "web development",
          "styling",
          "frontend",
          "utility-first CSS",
        ]}
      />
      <main>
        <section className="relative bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block">Style with</span>
                <span className="block text-indigo-600 dark:text-indigo-400">
                  CSSeducteur
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Experience the art of elegant styling with CSSeducteur. Write
                less, style more, and create beautiful interfaces with
                unprecedented ease and sophistication.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <Link
                    to="/docs"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Why Choose CSSeducteur?
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Discover the features that make CSSeducteur the most elegant CSS
                framework.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles
                    className="text-indigo-600 dark:text-indigo-400"
                    size={24}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Elegant by Design
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Write clean, maintainable CSS with our intuitive and elegant
                  class naming system.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                  <Zap
                    className="text-indigo-600 dark:text-indigo-400"
                    size={24}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Lightning Fast
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Optimized for performance with minimal bundle size and maximum
                  impact on your designs.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                  <PaintBucket
                    className="text-indigo-600 dark:text-indigo-400"
                    size={24}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Beautiful Defaults
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Create stunning interfaces with our carefully crafted design
                  system and components.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Built for Modern Development
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                CSSeducteur provides everything you need for modern web
                development.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="bg-gray-50 dark:bg-gray-800 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Dark Mode Support
                  </h3>
                  <pre className="bg-white dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <code className="text-sm text-gray-800 dark:text-gray-200">
                      {`<div class="cs-bg-white cs-dark:bg-gray-900">
  <h1 class="cs-text-gray-900 cs-dark:text-white">
    Automatic dark mode
  </h1>
</div>`}
                    </code>
                  </pre>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="bg-gray-50 dark:bg-gray-800 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Responsive Design
                  </h3>
                  <pre className="bg-white dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <code className="text-sm text-gray-800 dark:text-gray-200">
                      {`<div class="cs-grid cs-grid-cols-1 
  cs-md:grid-cols-2 cs-lg:grid-cols-3">
  <!-- Responsive grid layout -->
</div>`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
