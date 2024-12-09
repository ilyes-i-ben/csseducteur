import React from 'react';
import { SEO } from '../../components/SEO';
import { CodeBlock } from '../../components/CodeBlock';

export function Introduction() {
  return (
    <>
      <SEO
        title="Documentation - Introduction"
        description="Get started with CSSeducteur, the elegant CSS framework for modern web development."
        keywords={['CSSeducteur', 'CSS framework', 'documentation', 'getting started', 'web development']}
      />
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Introduction</h1>
        
        <div className="my-6 p-4 bg-indigo-50 dark:bg-indigo-900/50 rounded-lg">
          <p className="text-indigo-700 dark:text-indigo-300">
            CSSeducteur is more than just a CSS framework—it's an elegant approach to styling that makes your development
            workflow smoother and more enjoyable. With its carefully crafted utility classes and components, you can create
            stunning interfaces with minimal effort.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Quick Start</h2>
        <CodeBlock
          code={`npm install csseducteur
# or
yarn add csseducteur`}
          language="bash"
        />

        <div className="my-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            💡 CSSeducteur is designed to be intuitive and easy to learn, while providing powerful features for building
            modern web applications.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Basic Usage</h2>
        <CodeBlock
          code={`<div class="cs-container cs-flex cs-items-center cs-justify-between">
  <h1 class="cs-text-2xl cs-font-bold cs-text-primary">
    Hello, CSSeducteur!
  </h1>
  <button class="cs-btn cs-btn-primary">
    Get Started
  </button>
</div>`}
        />

        <div className="my-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            ✨ All CSSeducteur classes are prefixed with 'cs-' to avoid conflicts with other frameworks and maintain clean,
            organized code.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Key Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Intuitive utility-first approach with elegant class naming</li>
          <li>Seamless dark mode support with zero configuration</li>
          <li>Responsive design utilities that adapt to any screen</li>
          <li>Modern component patterns for rapid development</li>
          <li>Performance optimized with minimal bundle size</li>
          <li>Beautiful default styles that look great out of the box</li>
        </ul>
      </div>
    </>
  );
}