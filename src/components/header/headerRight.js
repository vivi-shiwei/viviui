import React from 'react'
import {
  Flex
} from '@chakra-ui/core'
const Right = ({ logo, profilePhoto, MenuTest, noColormode = false, disclosure, children, ...props }) => {
  return (
    <>
      <Flex
        align='center'
        position='absolute'
        top='50%'
        right='0'
        transform='translate(0, -50%)'
        display={{ base: 'none', sm: 'none', md: 'flex' }}
        {...props}
      >
        {children}
      </Flex>
    </>
  )
}
export default Right
