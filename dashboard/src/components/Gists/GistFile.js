import React from 'react';
import { Stack, Code } from '@chakra-ui/core';

const GistFile = ({filename, type, language, raw_url, size, content}) => {
  return (
    <>
      <h4>{filename}</h4>
      <Stack isInline={false} shouldWrapChildren>
        <Code children={content} />
      </Stack>
    </>
  );
};

export default GistFile;
