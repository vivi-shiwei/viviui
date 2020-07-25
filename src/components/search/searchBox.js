import React from 'react';
import { Input } from '@chakra-ui/core';

const SearchBox = ({ children, ...props }) => {
  return (
    <Input
      placeholder='活動名稱、特長'
      variant='outline'
      maxW='590px'
      {...props}
    />
  )
};

export default SearchBox
