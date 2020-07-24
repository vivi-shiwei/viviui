import React from 'react'
import {
  MenuButton,
  Icon
} from '@chakra-ui/core'

const postMenuButton = ({ children, ...props }) => {
  return (
    <MenuButton as={Icon} size='30px' name='chevron-down' fontSize='20px' {...props} />
  )
}
export default postMenuButton
