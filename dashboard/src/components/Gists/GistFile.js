import React from 'react';

const GistFile = ({filename, type, language, raw_url, size, content}) => {
  return (
    <>
      <h4>{filename}</h4>
      <pre>
        {content}
      </pre>
    </>
  );
};

export default GistFile;
