import React from "react";
import { Link } from "gatsby";
import { SEO } from "../../components/SEO";
import { ArrowRight } from "lucide-react";
import { graphql } from "gatsby";

interface BlogData {
    allBlogsJson: {
        nodes: {
            slug: string;
            description: string;
            title: string;
            content: {
                question: string;
            };
        }[];
    };
}

// Utility function to truncate text
const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
};

export default function BlogIndex({ data }: { data: BlogData }) {
    const blogs = data.allBlogsJson.nodes;

    const maxLength = 150; // Set the maximum length for the description

    return (
        <>
            <SEO
                title="CSSeducteur - Blog"
                description="Explorez les articles de blog de CSSeducteur pour des conseils, des tutoriels et des meilleures pratiques sur l'utilisation de CSSeducteur dans vos projets web."
                keywords={["CSSeducteur", "blog", "tutoriels", "meilleures pratiques", "développement web", "CSS"]}
            />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <section className="text-center prose max-w-none">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block">Blogs</span>
                        <span className="block text-indigo-600">CSSeducteur</span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Bienvenue sur le blog de CSSeducteur ! Ici, vous trouverez des articles, des tutoriels et des meilleures pratiques pour vous aider à tirer le meilleur parti de CSSeducteur dans vos projets web.
                    </p>
                    <div className="mt-5 sm:flex sm:justify-center md:mt-8 gap-2 flex-wrap">
                        {blogs.map((blog) => ( 
                            <article key={blog.slug} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" title={blog.title} >
                                <Link to={`/blogs/${blog.slug}`} title={blog.title}>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.content.question}</h5>
                                </Link>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    <span className="sr-only">{blog.description}</span>
                                    {truncateText(blog.description, maxLength)}
                                </p>
                                <Link to={`/blogs/${blog.slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
                                    Read more
                                    <ArrowRight className="ml-2" size={20} />
                                </Link>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}

export const query = graphql`
   query BlogsQuery {
      allBlogsJson {
        nodes {
            slug
            description
            title
            content {
               question
            }
        }
    }
   }
`;