import React from 'react';

const MarkdownSection = ({ section }) => {
  return <div key={section.id} dangerouslySetInnerHTML={{ __html: section.content.childMarkdownRemark.html }}></div>
}

export default MarkdownSection;