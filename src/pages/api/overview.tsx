import React from "react";
import { SEO } from "../../components/SEO";
import { CodeBlock } from "../../components/CodeBlock";

export default function ApiIntroduction() {
    return (
        <>
            <SEO
                title="CSSeducteur API Documentation - Introduction"
                description="Explore the CSSeducteur API documentation. Learn how to get started with our API and integrate powerful CSS functionality into your web projects."
                keywords={[
                    "API documentation",
                    "CSS API",
                    "introduction",
                    "CSSeducteur",
                    "web development",
                    "advanced CSS",
                    "API integration",
                ]}
            />
            <div className="prose dark:prose-invert max-w-none">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                    Welcome to the CSSeducteur API
                </h1>
                <p>
                    The CSSeducteur API is your gateway to advanced CSS features that can take your web projects to the next level.
                    Whether you're building responsive designs, implementing dynamic animations, or customizing themes, our API provides the tools you need to succeed.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose the CSSeducteur API?</h2>
                <p>
                    CSSeducteur simplifies the process of integrating CSS capabilities into your applications. With our API, you can:
                </p>
                <ul>
                    <li><strong>Streamline Development:</strong> Access pre-built styles and animations to speed up your workflow.</li>
                    <li><strong>Enhance Design:</strong> Leverage advanced CSS techniques to create visually stunning user interfaces.</li>
                    <li><strong>Boost Performance:</strong> Optimize CSS delivery for better performance and faster load times.</li>
                    <li><strong>Ensure Security:</strong> Enjoy secure access with API keys and HTTPS protocols.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Getting Started with the CSSeducteur API</h2>
                <p>
                    To get started, follow these steps:
                </p>
                <ol className="list-decimal ml-6">
                    <li>
                        <strong>Sign Up:</strong> Create an account on our <a href="https://csseducteur.me/signup">CSSeducteur platform</a> to access your API key.
                    </li>
                    <li>
                        <strong>Authenticate:</strong> Use your API key to make authorized requests to our endpoints. See the <a href="/api/authentication">Authentication Guide</a> for details.
                    </li>
                    <li>
                        <strong>Explore:</strong> Browse through the available endpoints in our <a href="/api/endpoints">API Endpoints</a> documentation.
                    </li>
                </ol>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Example API Call</h2>
                <p>
                    Below is an example of how to make a simple API request to fetch resources:
                </p>
                <CodeBlock
                    code={`// Example of an API call
fetch('https://csseducteur.me/api/v1/resources', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`}
                    language="javascript"
                />
                <p>
                    Replace <code>YOUR_API_KEY</code> with your actual API key. This example demonstrates a <code>GET</code> request, which retrieves a list of resources.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">API Response Format</h2>
                <p>
                    The CSSeducteur API returns responses in JSON format. Here's an example of a typical response:
                </p>
                <CodeBlock
                    code={`{
  "status": "success",
  "data": [
    {
      "id": 1,
      "name": "Sample Resource",
      "description": "A detailed description of the resource.",
      "createdAt": "2025-01-01T12:00:00Z"
    },
    {
      "id": 2,
      "name": "Another Resource",
      "description": "Details about another resource.",
      "createdAt": "2025-01-02T14:00:00Z"
    }
  ]
}`}
                    language="json"
                />
                <p>
                    The response typically includes:
                </p>
                <ul>
                    <li><code>status</code>: Indicates the success or failure of the request.</li>
                    <li><code>data</code>: Contains the requested resources in an array format.</li>
                    <li><code>createdAt</code>: Timestamps indicating when the resource was created.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Key Concepts</h2>
                <p>
                    Before diving deeper, it's important to understand some core concepts of the CSSeducteur API:
                </p>
                <ul>
                    <li>
                        <strong>Endpoints:</strong> These are the API routes you interact with to retrieve or modify data. Examples include <code>/v1/resources</code> and <code>/v1/animations</code>.
                    </li>
                    <li>
                        <strong>Authentication:</strong> Secure access is ensured through the use of API keys. Check out our <a href="/api/authentication">Authentication Guide</a> for more information.
                    </li>
                    <li>
                        <strong>Rate Limiting:</strong> The API enforces limits on the number of requests per minute to maintain optimal performance for all users.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Resources to Help You</h2>
                <p>
                    If you're new to the API or need additional guidance, here are some helpful resources:
                </p>
                <ul>
                    <li>
                        <a href="/api/authentication">Authentication Guide</a>: Learn how to securely access the API.
                    </li>
                    <li>
                        <a href="/api/endpoints">Endpoints Overview</a>: Explore all the available API endpoints and their functionalities.
                    </li>
                    <li>
                        <a href="/api/errors">Error Handling</a>: Understand common error codes and how to resolve them.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
                <p>
                    The CSSeducteur API is designed to empower developers by providing robust tools for integrating advanced CSS functionality. Whether you're building a sleek website or a complex application, our API is here to make your development process faster, easier, and more efficient.
                </p>
                <p>
                    Ready to dive in? Head over to the <a href="/api/endpoints">Endpoints Documentation</a> to start building with CSSeducteur today!
                </p>
            </div>
        </>
    );
}
