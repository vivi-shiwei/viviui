import React, { memo } from 'react'
import {
  Flex
} from '@chakra-ui/core'

const HeaderLeft = (props) => {
  return (
    <Flex
      justify='flex-start'
      alignItems='center'
      {...props}
    />
  )
}
export default memo(HeaderLeft)
