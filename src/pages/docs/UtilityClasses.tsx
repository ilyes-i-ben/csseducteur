import React from 'react';
import { SEO } from '../../components/SEO';
import { CodeBlock } from '../../components/CodeBlock';

export function UtilityClasses() {
  return (
    <>
      <SEO
        title="Documentation - Utility Classes"
        description="Learn about CSSeducteur's utility-first approach and available utility classes."
        keywords={['utility classes', 'CSS utilities', 'styling', 'CSS framework']}
      />
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Utility Classes</h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-400">
          CSSeducteur provides a comprehensive set of utility classes that help you build modern interfaces
          without leaving your HTML.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Spacing</h2>
        <CodeBlock
          code={`<div class="cs-p-4 cs-m-2">
  <div class="cs-px-6 cs-py-4">
    Padding and Margin utilities
  </div>
</div>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Typography</h2>
        <CodeBlock
          code={`<p class="cs-text-lg cs-font-bold cs-text-primary">
  Styled text with utilities
</p>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Flexbox</h2>
        <CodeBlock
          code={`<div class="cs-flex cs-items-center cs-justify-between">
  <div>Flex Item 1</div>
  <div>Flex Item 2</div>
</div>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Grid</h2>
        <CodeBlock
          code={`<div class="cs-grid cs-grid-cols-3 cs-gap-4">
  <div>Grid Item 1</div>
  <div>Grid Item 2</div>
  <div>Grid Item 3</div>
</div>`}
        />
      </div>
    </>
  );
}