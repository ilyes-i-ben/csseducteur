const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

    // const { data } = await graphql(`
    //     query blogs {
    //         allMarkdownRemark {
    //             nodes {
    //                 frontmatter {
    //                     slug
    //                 }
    //                 html
    //             }
    //         }
    //     }
    // `)

    // data.allMarkdownRemark.nodes.forEach(node => {
    //     actions.createPage({
    //         path: '/blogs/' + node.frontmatter.slug,
    //         component: path.resolve('./src/templates/blog-template.tsx'),
    //         context: { slug: node.frontmatter.slug }
    //     })
    // })


    const { data } = await graphql(`
        query BlogsQuery {
            allBlogsJson {
                nodes {
                    id
                    slug
                }
            }
        }
    `);

    // console.log(data);

    data.allBlogsJson.nodes.forEach(node => {
        actions.createPage({
            path: "/blogs/" + node.slug,
            component: path.resolve('./src/templates/blog-template.tsx'),
            context: { id: node.id }
        })
    });

}