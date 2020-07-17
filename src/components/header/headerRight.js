import React from 'react'
import {
  Flex
} from '@chakra-ui/core'
const Right = ({ logo, profilePhoto, MenuTest, noColormode = false, disclosure, children, ...props }) => {
  return (
    <>
      <Flex
        align='center'
        justify='flex-end'
        mr={0}
        display={{ base: 'none', sm: 'none', md: 'flex' }}
        {...props}
      >
        {children}
      </Flex>
    </>
  )
}
export default Right
