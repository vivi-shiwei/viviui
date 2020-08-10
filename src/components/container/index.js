import React, { memo } from 'react'
import {
  Box
} from '@chakra-ui/core'

const Container = (props) => {
  return (
    <Box
      width='full'
      maxWidth='1280px'
      mx='auto'
      px={2}
      {...props}
    />
  )
}

export default memo(Container)
