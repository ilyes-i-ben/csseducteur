import React from 'react';
import { SEO } from '../../components/SEO';
import { CodeBlock } from '../../components/CodeBlock';

export function Installation() {
  return (
    <>
      <SEO
        title="Documentation - Installation"
        description="Learn how to install and set up CSSeducteur in your project."
        keywords={['installation', 'setup', 'configuration', 'CSS framework']}
      />
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Installation</h1>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">NPM Installation</h2>
        <CodeBlock
          code={`npm install csseducteur
# or with yarn
yarn add csseducteur`}
          language="bash"
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Configuration</h2>
        <p>Add CSSeducteur to your project's entry point:</p>
        <CodeBlock
          code={`// styles.css or main.css
@import 'csseducteur/dist/csseducteur.css';`}
          language="css"
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">CDN Usage</h2>
        <p>Alternatively, you can use CSSeducteur directly from a CDN:</p>
        <CodeBlock
          code={`<link 
  rel="stylesheet" 
  href="https://cdn.jsdelivr.net/npm/csseducteur/dist/csseducteur.min.css"
/>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Next Steps</h2>
        <p>
          After installation, you can start using CSSeducteur's utility classes and components in your HTML.
          Check out our examples section to see how to create common UI patterns.
        </p>
      </div>
    </>
  );
}