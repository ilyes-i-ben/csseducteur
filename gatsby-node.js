const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql(`
        query BlogsQuery {
            allBlogsJson(sort: {content: {question: ASC}}) {
                nodes {
                    id
                    slug
                }
            }
        }
    `);

    data.allBlogsJson.nodes.forEach(node => {
        actions.createPage({
            path: "/blogs/" + node.slug,
            component: path.resolve('./src/templates/blog-template.tsx'),
            context: { id: node.id }
        })
    });

}