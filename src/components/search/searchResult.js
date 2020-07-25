import React from 'react'
import { Heading } from '@chakra-ui/core'
const SearchResult = ({ children, ...props }) => {
  return (
    <>
      <Heading
        as='h2'
        textAlign='center'
        fontSize={{ base: '16px', sm: '16px', md: '24px', lg: '24px' }}
        fontWeight='bold'
        mt='10px'
        {...props}
      >
        {children}
      </Heading>
    </>
  )
}

export default SearchResult
