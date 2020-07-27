import React, { memo } from 'react'
import {
  Flex
} from '@chakra-ui/core'

const HeaderLogo = (props) => {
  return (
    <Flex
      justify='flex-start'
      {...props}
    />
  )
}

export default memo(HeaderLogo)
