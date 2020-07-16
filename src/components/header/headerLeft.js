import React from 'react'
import {
  Box,
  Flex
} from '@chakra-ui/core'

const HeaderLeft = ({ logo, text, children, ...props }) => {
  return (
    <Flex
      // position='absolute'
      // top='50%'
      // left='0'
      // transform='translate(0, -50%)'
      float='left'
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
