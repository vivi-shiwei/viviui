import React from 'react'
import {
  Box

} from '@chakra-ui/core'

const intelligenceRight = ({ children, ...props }) => {
  return (
    <Box width='32%' display='flex' alignItems='center' justifyContent='space-around' mr={{ base: '5px', sm: '5px', md: '0' }}>
      {children}
    </Box>
  )
}
export default intelligenceRight
