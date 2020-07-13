import React from 'react'
import {
  Flex,
  ButtonGroup
} from '@chakra-ui/core'

const HeaderCenter = ({ children, ...props }) => {
  return (
    <Flex
      // justifyContent='center'
      position='absolute'
      top='50%'
      left='50%'
      transform='translate(-50%, -50%)'
      display={{ base: 'none', sm: 'none', md: 'flex' }}
      // flex='10'
      {...props}
    >
      {children}
    </Flex>
  )
}
export default HeaderCenter
