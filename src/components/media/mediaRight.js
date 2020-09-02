import React, { memo } from 'react'
import {
  Flex
} from '@chakra-ui/core'

const MediaRight = (props) => {
  return (
    <Flex
      justify='flex-end'
      {...props}
    />
  )
}

export default memo(MediaRight)
