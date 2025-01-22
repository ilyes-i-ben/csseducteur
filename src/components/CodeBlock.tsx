import React from 'react';

interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  return (
    <pre className="relative rounded-lg bg-gray-900 p-4 overflow-x-auto">
      <code className="text-sm text-gr<ay-200 font-mono">{code}</code>
    </pre>
  );
}