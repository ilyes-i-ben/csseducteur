import React from 'react';
import { SEO } from '../../components/SEO';
import { CodeBlock } from '../../components/CodeBlock';

export function Navigation() {
  return (
    <>
      <SEO
        title="Documentation - Navigation"
        description="Build responsive navigation components with CSSeducteur."
        keywords={['navigation', 'navbar', 'menu', 'CSS framework']}
      />
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Navigation</h1>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Basic Navbar</h2>
        <CodeBlock
          code={`<nav class="cs-navbar cs-bg-white cs-shadow">
  <div class="cs-container cs-mx-auto cs-px-4">
    <div class="cs-flex cs-justify-between cs-items-center cs-h-16">
      <div class="cs-flex-shrink-0">
        <a href="#" class="cs-text-xl cs-font-bold">Logo</a>
      </div>
      <div class="cs-hidden cs-md:block">
        <div class="cs-flex cs-items-center cs-space-x-4">
          <a href="#" class="cs-nav-link cs-active">Home</a>
          <a href="#" class="cs-nav-link">About</a>
          <a href="#" class="cs-nav-link">Services</a>
          <a href="#" class="cs-nav-link">Contact</a>
        </div>
      </div>
    </div>
  </div>
</nav>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Responsive Menu</h2>
        <CodeBlock
          code={`<div class="cs-md:hidden">
  <button class="cs-menu-button">
    <span class="cs-sr-only">Open menu</span>
    <svg class="cs-h-6 cs-w-6" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" d="M4 6h16M4 12h16m-16 6h16" />
    </svg>
  </button>
  <div class="cs-mobile-menu">
    <a href="#" class="cs-mobile-link cs-active">Home</a>
    <a href="#" class="cs-mobile-link">About</a>
    <a href="#" class="cs-mobile-link">Services</a>
    <a href="#" class="cs-mobile-link">Contact</a>
  </div>
</div>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Breadcrumbs</h2>
        <CodeBlock
          code={`<nav class="cs-breadcrumbs">
  <ol class="cs-flex cs-items-center cs-space-x-2">
    <li>
      <a href="#" class="cs-breadcrumb-link">Home</a>
    </li>
    <li class="cs-breadcrumb-separator">/</li>
    <li>
      <a href="#" class="cs-breadcrumb-link">Products</a>
    </li>
    <li class="cs-breadcrumb-separator">/</li>
    <li>
      <span class="cs-breadcrumb-current">Category</span>
    </li>
  </ol>
</nav>`}
        />
      </div>
    </>
  );
}