import React, { memo } from 'react'
import {
  MenuButton,
  Button,
  Icon
} from '@chakra-ui/core'

const HeaderMenuButton = ({ children, ...props }) => {
  return (
    <MenuButton as={Icon} size='30px' name='chevron-down' fontSize='20px' {...props} />
  )
}
export default memo(HeaderMenuButton)
