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
        flex='2'
        mr='0'
        {...props}
      >
        {children}
      </Flex>
    </>
  )
}
export default Right
