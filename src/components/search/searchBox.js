import React from 'react'
import { Input } from '@chakra-ui/core'

const SearchBox = (props) => {
  return (
    <Input
      maxW='590px'
      {...props}
    />
  )
}

export default SearchBox
