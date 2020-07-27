import React from 'react'
import { Box } from '@chakra-ui/core'
import { GrUserAdmin } from 'react-icons/gr'

const Administrator = ({ children, ...props }) => {
  return (
    <Box {...props}>
      <Box as={GrUserAdmin} mr={2} />
      <Box>{children}</Box>
    </Box>
  )
}
export default Administrator
