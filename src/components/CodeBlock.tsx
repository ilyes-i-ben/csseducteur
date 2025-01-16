import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'html' }: CodeBlockProps) {
  return (
    <SyntaxHighlighter language={language} style={atomDark}>
      {code}
    </SyntaxHighlighter>
    // <pre className="relative rounded-lg bg-gray-900 p-4 overflow-x-auto">
    //   <code className="text-sm text-gray-200 font-mono">{code}</code>
    // </pre>
  );
}