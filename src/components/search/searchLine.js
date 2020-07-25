import React from 'react';
import { Flex } from '@chakra-ui/core';
const SearchLine = ({ children, ...props }) => {
  return (
    <>
      <Flex
        align='center'
        justify='space-between'
        width={{ base: '100%', md: '55%' }}
        margin='0 auto'
        {...props}
      >
        {children}
      </Flex>
    </>
  )
};

export default SearchLine
