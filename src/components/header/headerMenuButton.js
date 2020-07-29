import React, { memo } from 'react'
import {
  MenuButton,
  Button
} from '@chakra-ui/core'

const HeaderMenuButton = (props) => {
  return (
    <MenuButton as={Button} {...props} />
  )
}
export default memo(HeaderMenuButton)
