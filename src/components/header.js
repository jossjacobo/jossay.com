import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

const Section = styled.div`
  marginBottom: 1.45rem
`

const Navigation = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 0;
`;

const Logo = styled.h3`
  display: inline-block;
`

const NavItemsContainer = styled.div`
  float: right;
`

const renderNavItem = nav => {
  return nav
    ? (
      <NavItemsContainer key={nav.node.id}>
        <Link to={`/${nav.node.slug}/`}>
          {nav.node.title}
        </Link>
      </NavItemsContainer>)
    : ``;
}

const Header = ({ nav }) => {
  return (
    <Section>
      <Navigation>
        <Logo>
          <Link
            to={`/`}
            style={{
              color: 'black',
              textDecoration: 'none'
            }}
          >
            {"<"}JJ{">"}
          </Link>
        </Logo>

        {/* Render all the nav items */}
        {nav && nav.map(navItem => renderNavItem(navItem))}
      </Navigation>
    </Section>
  );
}

export default Header;