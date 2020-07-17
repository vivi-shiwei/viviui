import React from 'react'
import {
  Flex
} from '@chakra-ui/core'
const HeaderRight = ({ logo, profilePhoto, MenuTest, noColormode = false, disclosure, children, ...props }) => {
  return (
    <>
      <Flex
        align='center'
        justify='flex-end'
        mr={0}
        {...props}
      >
        {children}
      </Flex>
    </>
  )
}
export default HeaderRight
