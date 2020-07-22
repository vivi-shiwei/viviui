
import React from 'react'
import {
  Box
} from '@chakra-ui/core'

const ButtonGroup = ({ children, ...props }) => {
  return (
    <Box width={{ base: '70%', md: '45%' }} display='flex' alignItems='center' justifyContent='between' {...props}>
      {children}
    </Box>
  )
}
export default ButtonGroup
