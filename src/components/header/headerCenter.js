import React from 'react'
import {
  Flex
} from '@chakra-ui/core'

const HeaderCenter = ({ children, ...props }) => {
  return (
    <Flex
      position='absolute'
      top='50%'
      left='50%'
      transform='translate(-50%, -50%)'
      display={{ base: 'none', sm: 'none', md: 'flex' }}
      {...props}
    >
      {children}
    </Flex>
  )
}
export default HeaderCenter
