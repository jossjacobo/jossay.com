import React from 'react'
import Hero from '../components/hero';
import Sections from '../components/sections';

const IndexPage = ({ data }) => {
  const homepage = data.allContentfulPage.edges[0].node;
  return (
    <div>
      <Hero>
        Yo! I'm Jossay Jacobo -- Principal Software Engineer -- I lead, build, and test all kinds at apps at <a href='https://willowtreeapps.com' target='blank'>WillowTree</a> in Charlottestville Virginia.
      </Hero>
      <Sections sections={homepage.content} />
    </div>
  )
}

export default IndexPage;

export const query = graphql`
  query homepageQuery {
    allContentfulPage (filter: { slug: { eq: "homepage" } })  {
      edges {
        node {
          id
          title
          slug
          topLevelNavigation
          createdAt
          updatedAt
          content {
            __typename
            ... on ContentfulMarkdownContent {
              id
              title
              content {
                childMarkdownRemark {
                  html
                }
              }
            }
            ... on ContentfulBioSection {
              id
              title
              content {
                childMarkdownRemark {
                  html
                }
              }
            }
            ... on ContentfulToolkitSection {
              id
              title
              description
              tools
            }
          }
        }
      }
    }
  }
`
