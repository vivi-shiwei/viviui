import React, { memo } from 'react'
import {
  Flex
} from '@chakra-ui/core'

const HeaderLogo = (props) => {
  return (
    <Flex
      justify='flex-start'
      mx={2}
      {...props}
    />
  )
}

export default memo(HeaderLogo)
