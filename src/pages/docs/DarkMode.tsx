import React from 'react';
import { SEO } from '../../components/SEO';
import { CodeBlock } from '../../components/CodeBlock';

export function DarkMode() {
  return (
    <>
      <SEO
        title="Documentation - Dark Mode"
        description="Implement dark mode in your application using CSSeducteur's dark mode utilities."
        keywords={['dark mode', 'theme switching', 'CSS framework']}
      />
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Dark Mode</h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-400">
          CSSeducteur provides built-in dark mode support with the cs-dark modifier.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Basic Usage</h2>
        <CodeBlock
          code={`<div class="cs-bg-white cs-dark:bg-gray-900">
  <p class="cs-text-gray-900 cs-dark:text-white">
    Automatic dark mode text
  </p>
</div>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Dark Mode Toggle</h2>
        <CodeBlock
          code={`const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark');
};`}
          language="javascript"
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">System Preference</h2>
        <CodeBlock
          code={`// Detect system dark mode preference
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
}`}
          language="javascript"
        />
      </div>
    </>
  );
}