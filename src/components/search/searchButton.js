import React from 'react'
import { Button } from '@chakra-ui/core'
const SearchButton = (props) => {
  return (
    <Button
      as='div'
      variantColor='blue'
      minW={{ base: 70, md: 100 }}
      fontSize={{ base: '14px', md: '16px' }}
      ml={2}
      {...props}
    />
  )
}

export default SearchButton
