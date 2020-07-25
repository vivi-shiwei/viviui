import React from 'react';
import { Button } from '@chakra-ui/core';
const SearchButton = ({ children, ...props }) => {
  return (
    <>
      <Button
        variant='outline'
        bg='#a1c9eb'
        ml={{ base: '10px', sm: '10px', md: '10px', lg: '0' }}
        {...props}
      >
        {children}
      </Button>
    </>
  )
};

export default SearchButton
