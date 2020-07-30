import React from 'react'
import {
  Box
} from '@chakra-ui/core'

import SearchLine from './searchLine'

const Search = ({ left, right, title, children, ...props }) => {
  return (
    <>
      <Box mt={16} py={4} {...props}>
        <SearchLine>
          {left}
          {right}
        </SearchLine>
        {title}
        {children}
      </Box>
    </>
  )
}

export default Search
