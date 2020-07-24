import React from 'react'
import { Box } from '@chakra-ui/core'
import { GrUserAdmin } from 'react-icons/gr'

const Administrator = ({ children, ...props }) => {
  return (
    <>
      <Box as={GrUserAdmin} mr={2} /><Box>{children}</Box>
    </>
  )
}
export default Administrator
