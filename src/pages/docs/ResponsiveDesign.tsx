import React from 'react';
import { SEO } from '../../components/SEO';
import { CodeBlock } from '../../components/CodeBlock';

export function ResponsiveDesign() {
  return (
    <>
      <SEO
        title="Documentation - Responsive Design"
        description="Learn how to create responsive layouts with CSSeducteur's breakpoint system."
        keywords={['responsive design', 'mobile-first', 'breakpoints', 'CSS framework']}
      />
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Responsive Design</h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-400">
          CSSeducteur follows a mobile-first approach with intuitive breakpoint modifiers.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Breakpoints</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>sm: 640px and up</li>
          <li>md: 768px and up</li>
          <li>lg: 1024px and up</li>
          <li>xl: 1280px and up</li>
          <li>2xl: 1536px and up</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Responsive Classes</h2>
        <CodeBlock
          code={`<div class="cs-grid cs-grid-cols-1 cs-md:grid-cols-2 cs-lg:grid-cols-3">
  <div>Responsive Grid Item</div>
  <div>Responsive Grid Item</div>
  <div>Responsive Grid Item</div>
</div>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Responsive Typography</h2>
        <CodeBlock
          code={`<h1 class="cs-text-xl cs-md:text-2xl cs-lg:text-3xl">
  Responsive Heading
</h1>`}
        />
      </div>
    </>
  );
}