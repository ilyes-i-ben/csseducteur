import React from "react";
import { SEO } from "../components/SEO";

export default function Contact() {
    return (
        <>
            <SEO
                title="Contact - CSSeducteur"
                description="Contactez-nous pour toute question, suggestion ou commentaire concernant CSSeducteur."
                keywords={[
                    "CSSeducteur",
                    "contact",
                    "support",
                    "aide",
                    "développement web",
                ]}
            />
            <main className="relative bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                    <div className="prose max-w-none">
                        <h1 className="text-center text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block">Contactez</span>
                            <span className="block text-indigo-600">CSSeducteur</span>
                        </h1>
                        <p className="text-center mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            Nous serions ravis de recevoir vos questions, suggestions ou commentaires. N'hésitez pas à nous contacter via le formulaire ci-dessous.
                        </p>
                    </div>
                </div>

                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900">Formulaire de Contact</h2>
                            <p className="mt-4 text-gray-600">
                                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                            </p>
                        </div>
                        <div className="max-w-lg mx-auto">
                            <form className="p-6 bg-white rounded-lg shadow-sm">
                                <label className="block mb-2 font-bold" htmlFor="name">Nom</label>
                                <input className="w-full px-3 py-2 border rounded" type="text" id="name" name="name" required />
                                <label className="block mt-4 mb-2 font-bold" htmlFor="email">Email</label>
                                <input className="w-full px-3 py-2 border rounded" type="email" id="email" name="email" required />
                                <label className="block mt-4 mb-2 font-bold" htmlFor="message">Message</label>
                                <textarea className="w-full px-3 py-2 border rounded" id="message" name="message" rows={5} required></textarea>
                                <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 my-4" type="submit">Envoyer</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
