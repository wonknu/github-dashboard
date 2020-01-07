import React from 'react';
import { Spinner, Flex } from '@chakra-ui/core';

const Loader = (props) => {
  return (
    <Flex className="loader" align="center" justify="center" height="full">
      <Spinner />
    </Flex>
  );
};

export default Loader;
