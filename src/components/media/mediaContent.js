import React, { memo } from 'react'
import {
  Flex
} from '@chakra-ui/core'

const MediaCenter = (props) => {
  return (
    <Flex
      justify='center'
      flex='10'
      {...props}
    />
  )
}

export default memo(MediaCenter)
