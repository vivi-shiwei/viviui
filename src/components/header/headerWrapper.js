import React from 'react'
import {
  Box
} from '@chakra-ui/core'

const HeaderWrapper = (props) => {
  return (
    <Box
      pos='fixed'
      as='header'
      top='0'
      zIndex='4'
      left='0'
      right='0'
      borderBottomWidth='1px'
      width='full'
      {...props}
    />
  )
}

export default HeaderWrapper
