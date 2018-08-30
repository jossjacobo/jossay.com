import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/header'

const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1rem 1.5rem 1rem;
  paddingTop: 0;
`

const Layout = ({ children, data }) => {
  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' }
        ]}
        // Not working /shrug
        link={[
          { rel: 'icon', type: 'image/png', size: '32x32', href: '../../resources/images/favicon.png' }
        ]}
      />
      <MainContainer>
        <Header nav={data.allContentfulPage && data.allContentfulPage.edges} />
        {children()}
      </MainContainer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPage(filter: {topLevelNavigation: {eq: true}, slug: {ne: "homepage"}}) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`