import React from "react";
import { SEO } from "../../components/SEO";
import { CodeBlock } from "../../components/CodeBlock";

export default function ApiIntroduction() {
    return (
        <>
            <SEO
                title="API Documentation - Introduction"
                description="Introduction to the CSSeducteur API documentation."
                keywords={["API", "documentation", "introduction", "CSSeducteur"]}
            />
            <div className="prose dark:prose-invert max-w-none">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                    Introduction to the API
                </h1>
                <p>
                    Welcome to the CSSeducteur API documentation. This section provides an overview of the API, including how to get started and key concepts.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-4">Getting Started</h2>
                <CodeBlock
                    code={`// Example of an API call
fetch('https://csseducteur.me/api/v1/resource')
  .then(response => response.json())
  .then(data => console.log(data));`}
                    language="javascript"
                />
                <p>
                    To start using the API, you need to make HTTP requests to the endpoints provided. The responses will be in JSON format.
                </p>
            </div>
        </>
    );
}
