import React from 'react';
import { SEO } from '../../components/SEO';
import { CodeBlock } from '../../components/CodeBlock';

export function Forms() {
  return (
    <>
      <SEO
        title="Documentation - Forms"
        description="Create beautiful forms with CSSeducteur's form components and utilities."
        keywords={['forms', 'inputs', 'form controls', 'CSS framework']}
      />
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Forms</h1>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Basic Form Controls</h2>
        <div className="not-prose space-y-4 mb-8">
          <div>
            <label className="cs-label">Email</label>
            <input
              type="email"
              className="cs-input"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="cs-label">Password</label>
            <input
              type="password"
              className="cs-input"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <CodeBlock
          code={`<div>
  <label class="cs-label">Email</label>
  <input
    type="email"
    class="cs-input"
    placeholder="Enter your email"
  />
</div>
<div>
  <label class="cs-label">Password</label>
  <input
    type="password"
    class="cs-input"
    placeholder="Enter your password"
  />
</div>`}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Form Layout</h2>
        <div className="not-prose mb-8">
          <form className="cs-form cs-space-y-6">
            <div className="cs-grid cs-grid-cols-1 cs-md:grid-cols-2 cs-gap-6">
              <div>
                <label className="cs-label">First Name</label>
                <input
                  type="text"
                  className="cs-input"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="cs-label">Last Name</label>
                <input
                  type="text"
                  className="cs-input"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div>
              <label className="cs-label">Message</label>
              <textarea
                className="cs-textarea"
                rows={4}
                placeholder="Your message"
              ></textarea>
            </div>
          </form>
        </div>
        <CodeBlock
          code={`<form class="cs-form cs-space-y-6">
  <div class="cs-grid cs-grid-cols-1 cs-md:grid-cols-2 cs-gap-6">
    <div>
      <label class="cs-label">First Name</label>
      <input type="text" class="cs-input" placeholder="John" />
    </div>
    <div>
      <label class="cs-label">Last Name</label>
      <input type="text" class="cs-input" placeholder="Doe" />
    </div>
  </div>
  <div>
    <label class="cs-label">Message</label>
    <textarea
      class="cs-textarea"
      rows="4"
      placeholder="Your message"
    ></textarea>
  </div>
</form>`}
        />
      </div>
    </>
  );
}