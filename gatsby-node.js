const path = require('path');

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve('./src/templates/page.js');
    graphql(`
      {
        allContentfulPage (filter: { slug: { ne: "homepage"} } ){
          edges {
            node {
              id
              title
              slug
            }
          }
        }
      }
    `)
      .then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        // If there are pages that are NOT the homepage, create them.
        if (result.data.allContentfulPage) {
          result.data.allContentfulPage.edges.forEach(edge => {
            createPage({
              path: edge.node.slug,
              component: pageTemplate,
              context: { slug: edge.node.slug }
            });
          })
        }
        resolve();
      })
  })
}