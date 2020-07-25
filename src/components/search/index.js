import React from 'react';
import { Box, Stack } from '@chakra-ui/core';
import SearchLine from './searchLine';
const Search = ({ left, right, error, children, ...props }) => {
  return (
    <>
      <Box {...props}>
        <SearchLine>
          {left}
          {right}
        </SearchLine>
        <Stack>{error}</Stack>
        {children}
      </Box>
    </>
  )
};

export default Search
