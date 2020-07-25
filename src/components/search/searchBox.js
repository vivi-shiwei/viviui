import React from 'react'
import { Input } from '@chakra-ui/core'

const SearchBox = ({ placeholder, children, ...props }) => {
  return (
    <Input
      placeholder={placeholder}
      variant='outline'
      maxW='590px'
      {...props}
    />
  )
}

export default SearchBox
