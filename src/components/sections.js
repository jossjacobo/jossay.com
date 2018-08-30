import React from 'react';
import BioSection from '../components/biosection';
import Toolkitsection from '../components/toolkitsection';
import MarkdownSection from '../components/markdownsection';

function renderSection(section) {
  switch (section.__typename) {
    case 'ContentfulBioSection':
      return <BioSection key={section.id} section={section} />;
    case 'ContentfulToolkitSection':
      return <Toolkitsection key={section.id} section={section} />
    case 'ContentfulMarkdownContent':
      return <MarkdownSection key={section.id} section={section} />
  }
}

const Section = ({ sections }) => {
  return (
    <div>{sections.map(section => renderSection(section))}</div>
  )
}

export default Section;