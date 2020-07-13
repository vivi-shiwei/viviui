import React from 'react'
import {
  Box,
  Flex
} from '@chakra-ui/core'

const HeaderLeft = ({ logo, text, children, ...props }) => {
  return (
    <Flex
      left='0'
      justifyContent='flex-start'
      flex='0'
      ml='0'
      {...props}
    >
      <Box alignItems='center'>
        {children}
      </Box>
    </Flex>
  )
}
export default HeaderLeft
