import React, { memo } from 'react'
import {
  MenuButton,
  Button
} from '@chakra-ui/core'

const HeaderMenuButton = ({ children, ...props }) => {
  return (
    <MenuButton as={Button} rightIcon='chevron-down' {...props}>
      {children}
    </MenuButton>
  )
}
export default memo(HeaderMenuButton)
