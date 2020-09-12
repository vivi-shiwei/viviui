import React from 'react'
import {
  Box
} from '@chakra-ui/core'

const PageBody = ({ children, ...props }) => {
  return (
    <Box
      as='section'
      w='100%'
      {...props}
    >
      {children}
    </Box>
  )
}

export default PageBody
