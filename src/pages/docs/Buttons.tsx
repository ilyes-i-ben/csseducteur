import React from "react";
import { SEO } from "../../components/SEO";
import { CodeBlock } from "../../components/CodeBlock";

export default function Buttons() {
    return (
        <>
            <SEO
                title="Documentation - Boutons"
                description="Explorez les composants et styles de boutons de CSSeducteur."
                keywords={["boutons", "composants", "éléments UI", "framework CSS"]}
            />
            <div className="prose  max-w-none">
                <h1 className="text-4xl font-bold text-gray-900 ">
                    Boutons
                </h1>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Boutons de base</h2>
                <div className="not-prose space-x-4 mb-8">
                    <button type="button" className="focus:outline-none text-white bg-indigo-600 hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">Principal</button>
                    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</button>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Contour
                        </span>
                    </button>
                </div>
                <CodeBlock
                    code={`<button class="cs-btn cs-btn-primary">Principal</button>
<button class="cs-btn cs-btn-secondary">Secondaire</button>
<button class="cs-btn cs-btn-outline">Contour</button>`}
                />

                <h2 className="text-2xl font-semibold mt-8 mb-4">
                    Tailles des boutons
                </h2>
                <div className="not-prose space-x-4 mb-8">

                    <button type="button" className="px-3 py-2 text-xs font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-600">Extra small</button>
                    <button type="button" className="px-3 py-2 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-600">Small</button>
                    <button type="button" className="px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-600 rounded-lg text-center">Base</button>
                    <button type="button" className="px-5 py-3 text-base font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-600">Large</button>
                    <button type="button" className="px-6 py-3.5 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-600 rounded-lg text-center">Extra large</button>

                </div>
                <CodeBlock
                    code={`<button class="cs-btn cs-btn-sm cs-btn-primary">Petit</button>
<button class="cs-btn cs-btn-primary">Par défaut</button>
<button class="cs-btn cs-btn-lg cs-btn-primary">Grand</button>`}
                />
            </div>
        </>
    );
}