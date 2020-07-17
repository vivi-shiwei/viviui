import React from 'react'
import {
  Box,
  Flex
} from '@chakra-ui/core'

const HeaderLeft = ({ logo, text, children, ...props }) => {
  return (
    <Flex
      justify='flex-start'
      ml='0'
      display={{ base: 'none', sm: 'none', md: 'flex' }}
      {...props}
    >
      <Box alignItems='center'>
        {children}
      </Box>
    </Flex>
  )
}
export default HeaderLeft
