import React from 'react';
import { SEO } from '../../components/SEO';
import { CodeBlock } from '../../components/CodeBlock';

export function Cards() {
  return (
    <>
      <SEO
        title="Documentation - Cards"
        description="Learn how to use CSSeducteur's card components for content organization."
        keywords={['cards', 'components', 'UI elements', 'CSS framework']}
      />
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Cards</h1>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Basic Card</h2>
        <div className="not-prose mb-8">
          <div className="cs-card cs-bg-white cs-p-6 cs-rounded-lg cs-shadow-md">
            <h3 className="cs-text-xl cs-font-semibold">Card Title</h3>
            <p className="cs-mt-2">Card content goes here.</p>
          </div>
        </div>
        <CodeBlock
          code={`<div class="cs-card cs-bg-white cs-p-6 cs-rounded-lg cs-shadow-md">
  <h3 class="cs-text-xl cs-font-semibold">Card Title</h3>
  <p class="cs-mt-2">Card content goes here.</p>
</div>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Card with Image</h2>
        <div className="not-prose mb-8">
          <div className="cs-card cs-bg-white cs-rounded-lg cs-shadow-md cs-overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
              alt="Card header"
              className="cs-w-full cs-h-48 cs-object-cover"
            />
            <div className="cs-p-6">
              <h3 className="cs-text-xl cs-font-semibold">Card with Image</h3>
              <p className="cs-mt-2">Card content with an image header.</p>
            </div>
          </div>
        </div>
        <CodeBlock
          code={`<div class="cs-card cs-bg-white cs-rounded-lg cs-shadow-md cs-overflow-hidden">
  <img
    src="image-url.jpg"
    alt="Card header"
    class="cs-w-full cs-h-48 cs-object-cover"
  />
  <div class="cs-p-6">
    <h3 class="cs-text-xl cs-font-semibold">Card with Image</h3>
    <p class="cs-mt-2">Card content with an image header.</p>
  </div>
</div>`}
        />
      </div>
    </>
  );
}