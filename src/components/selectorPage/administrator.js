import React from 'react'
import { Box } from '@chakra-ui/core'
import { GrUserAdmin } from 'react-icons/gr'

const Administrator = ({ icon, children, ...props }) => {
  return (
    <Box d='flex' alignItems='center' {...props}>
      {!!icon && (
        <Box as={icon} mr={2} />
      )}
      {!icon && (
        <Box as={GrUserAdmin} mr={2} />
      )}
      <Box>{children}</Box>
    </Box>
  )
}
export default Administrator
