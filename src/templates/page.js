import React from 'react'
import Sections from '../components/sections';

const Page = ({ data }) => {
  const page = data.allContentfulPage.edges[0].node;
  return <Sections sections={page.content} />
}

export default Page;

export const query = graphql`
  query pageQuery ($slug: String!) {
    allContentfulPage (filter: { slug: { eq: $slug } })  {
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

