import React from 'react'
import {
  Flex
} from '@chakra-ui/core'

const HeaderCenter = ({ center, children, ...props }) => {
  return (
    <Flex
      justify='center'
      flex='10'
      {...props}
    >
      {children}
    </Flex>
  )
}
export default HeaderCenter
