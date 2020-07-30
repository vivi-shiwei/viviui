import React from 'react'
import { Flex } from '@chakra-ui/core'
const SearchLine = (props) => {
  return (
    <Flex
      w={{ base: '100%', md: '700px' }}
      mx='auto'
      mt={4}
      {...props}
    />
  )
}

export default SearchLine
