import React from "react";
import { graphql, Link } from "gatsby";
import { SEO } from "../components/SEO";
import { ThumbsDown, ThumbsUp, User, ArrowLeft } from "lucide-react";
import { CodeBlock } from "../components/CodeBlock";

interface BlogData {
   blogsJson: {
      id: number;
      description: string;
      content: {
         question: string;
         snippet: string;
         votes: number;
      };
      title: string;
      date: string;
      tags: string[];
      comments: {
         username: string;
         date: string;
         comment: string;
         upvotes: number;
         downvotes: number;
      }[];
   }
}

const BlogTemplate = ({ data }: { data: BlogData }) => {

   const { content, title, date, tags, comments, description } = data.blogsJson;

   return (
      <>
         <SEO
            title={`${title} - CSSeducteur Blog`}
            description={description}
            keywords={[...tags, "CSSeducteur", "blog", "responsive navbar"]}
         />
         <main className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen font-sans">
            <Link to="/blogs" className="inline-flex items-center white mb-6">
               <ArrowLeft className="w-6 h-6 mr-2 text-indigo-600" />
               Retour aux <span className="text-indigo-600 font-bold">&nbsp;blogs</span>
            </Link>
            <header className="bg-gradient-to-r from-blue-700 to-blue-500 py-12 shadow-md">
               <div className="container mx-auto text-center">
                  <h1 className="text-4xl font-extrabold tracking-wide drop-shadow-md">{title}</h1>
                  <p className="text-md mt-3 italic">Publié le {new Date(date).toLocaleDateString("fr-FR")}</p>
               </div>
            </header>

            <section className="container mx-auto p-6">
               <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-semibold mb-4 border-b-2 pb-2 border-blue-300">Tags</h2>
                  <div className="flex flex-wrap gap-2">
                     {tags.map((tag: string) => (
                        <span
                           key={tag}
                           className="bg-blue-200 hover:bg-blue-300 text-blue-800 py-1 px-3 rounded-full text-sm font-medium cursor-pointer">
                           #{tag}
                        </span>
                     ))}
                  </div>
               </div>
            </section>

            <article className="container mx-auto p-6 bg-white mt-8 rounded-lg shadow-md">
               <h2 className="text-3xl font-semibold mb-6 text-gray-800 border-b-2 border-blue-400 pb-2">Question</h2>
               <p className="text-gray-700 text-lg leading-relaxed">{content.question}</p>

               <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-600">Aperçu</h3>
               <CodeBlock
                  code={content.snippet}
                  language="javascript"
               />

            </article>

            <section className="container mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
               <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">Commentaires</h3>
               {comments.map((comment, index) => (
                  <div key={index} className="mb-6 pb-4 border-b last:border-none">
                     <div className="flex items-center gap-4 mb-3">
                        <User className="w-8 h-8 text-blue-600" />
                        <div className="flex flex-col">
                           <span className="font-bold text-lg text-gray-900">{comment.username}</span>
                           <span className="text-gray-500 text-sm">
                              {new Date(comment.date).toLocaleDateString("fr-FR")}
                           </span>
                        </div>
                     </div>
                     <p className="text-gray-700 leading-relaxed">{comment.comment}</p>
                     <div className="mt-3 flex items-center gap-4 text-gray-600">
                        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                           <ThumbsUp className="w-5 h-5" />
                           <span>{comment.upvotes}</span>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer hover:text-red-600">
                           <ThumbsDown className="w-5 h-5" />
                           <span>{comment.downvotes}</span>
                        </div>
                     </div>
                  </div>
               ))}
            </section>
         </main>
      </>
   );
};

export const query = graphql`
   query BlogsQuery($id: String) {
      blogsJson(id: {eq: $id}) {
            content {
               question
               snippet
               votes
            }
            date
            slug
            tags
            title
            comments {
               comment
               date
               downvotes
               upvotes
               username
            }
            id
      }
   }
`;

export default BlogTemplate;