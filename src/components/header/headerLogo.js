import React from 'react'
import {
  Flex
} from '@chakra-ui/core'
const HeaderLogo = ({ icon, profilePhoto, MenuTest, noColormode = false, disclosure, children, ...props }) => {
  return (
    <Flex
      // position='absolute'
      justify='flex-start'
      // flex='-1'
      float='left'
      {...props}
    >
      {icon}
      {children}
    </Flex>
  )
}
export default HeaderLogo
