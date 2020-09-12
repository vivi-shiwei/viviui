import React from 'react'
import {
  Box
} from '@chakra-ui/core'

const PageFooter = ({ children, ...props }) => {
  return (
    <Box
      as='footer'
      w='100%'
      // borderTopWidth='1px'
      {...props}
    >
      {children}
    </Box>
  )
}

export default PageFooter
