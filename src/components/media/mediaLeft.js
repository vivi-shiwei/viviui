import React, { memo } from 'react'
import {
  Flex
} from '@chakra-ui/core'

const MediaLeft = (props) => {
  return (
    <Flex
      justify='flex-start'
      {...props}
    />
  )
}

export default memo(MediaLeft)
