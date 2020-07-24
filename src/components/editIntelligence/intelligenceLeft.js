import React from 'react'
import {
  Box
} from '@chakra-ui/core'

const IntelligenceLeft = ({ children, ...props }) => {
  return (
    <Box width='40%' {...props}>
      {children}
    </Box>
  )
}
export default IntelligenceLeft
