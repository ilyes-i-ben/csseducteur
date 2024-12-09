import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'html' }: CodeBlockProps) {
  return (
    <pre className="relative rounded-lg bg-gray-900 p-4 overflow-x-auto">
      <code className="text-sm text-gray-200 font-mono">{code}</code>
    </pre>
  );
}