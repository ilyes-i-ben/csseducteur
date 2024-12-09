import React from 'react';
import { SEO } from '../../components/SEO';
import { CodeBlock } from '../../components/CodeBlock';

export function Buttons() {
  return (
    <>
      <SEO
        title="Documentation - Buttons"
        description="Explore CSSeducteur's button components and styles."
        keywords={['buttons', 'components', 'UI elements', 'CSS framework']}
      />
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Buttons</h1>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Basic Buttons</h2>
        <div className="not-prose space-x-4 mb-8">
          <button className="cs-btn cs-btn-primary">Primary</button>
          <button className="cs-btn cs-btn-secondary">Secondary</button>
          <button className="cs-btn cs-btn-outline">Outline</button>
        </div>
        <CodeBlock
          code={`<button class="cs-btn cs-btn-primary">Primary</button>
<button class="cs-btn cs-btn-secondary">Secondary</button>
<button class="cs-btn cs-btn-outline">Outline</button>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Button Sizes</h2>
        <div className="not-prose space-x-4 mb-8">
          <button className="cs-btn cs-btn-sm cs-btn-primary">Small</button>
          <button className="cs-btn cs-btn-primary">Default</button>
          <button className="cs-btn cs-btn-lg cs-btn-primary">Large</button>
        </div>
        <CodeBlock
          code={`<button class="cs-btn cs-btn-sm cs-btn-primary">Small</button>
<button class="cs-btn cs-btn-primary">Default</button>
<button class="cs-btn cs-btn-lg cs-btn-primary">Large</button>`}
        />
      </div>
    </>
  );
}