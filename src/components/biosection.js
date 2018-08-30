import React from 'react';

const BioSection = ({ section }) => {
  return (
    <div>
      <h2>___</h2>
      <h2>{section.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: section.content.childMarkdownRemark.html }} />
    </div>
  )
}

export default BioSection;