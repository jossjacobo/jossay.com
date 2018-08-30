import React, { Children } from 'react'
import styled from 'styled-components'

const HeaderPadding = styled.div`
  height: 25vh;
`

const Container = styled.div`
  padding: 0 0 4rem 0;
`

const Hero = ({ children }) => (
  <Container>
    <HeaderPadding />
    <h1>
      {children}
    </h1>
  </Container>
);

export default Hero;