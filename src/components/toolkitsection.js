import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding-top: 2rem;
  padding-bottom: 2rem;
  @media(max-width: 800px) {
    display: block;
  }
`

const Column = styled.div`
  flex-basis: 33%;
`

const ToolList = styled.ul`
  margin-bottom: 0;
`

const renderList = (items, index) => {
  return (
    <Column key={index}>
      <ToolList>
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ToolList>
    </Column >
  )
}

const renderTools = tools => {
  if (tools) {
    if (tools.length == 1) {
      return renderList(tools);
    }
    const half = Math.floor(tools.length / 2);
    const columns = [
      tools.slice(0, half),
      tools.slice(half, tools.length)
    ]
    return columns.map((items, index) => renderList(items, index));
  }
  return '';
}

const Toolkit = ({ section }) => {
  return (
    <Container>
      <Column>
        <h2>{section.title}</h2>
        <h4>{section.description}</h4>
      </Column>
      {renderTools(section.tools)}
    </Container>
  )
};

export default Toolkit;