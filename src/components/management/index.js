import React from 'react'
import {
  Box

} from '@chakra-ui/core'

const Management = ({ title, text, columnLine, children, ...props }) => {
  return (
    <Box {...props}>
      {title}
      <Box as='article' px='5%'>
        {text}
        {columnLine}
      </Box>
    </Box>
  )
}

export default Management
