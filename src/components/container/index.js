import React, { memo } from 'react'
import {
  Box,
  useColorMode
} from '@chakra-ui/core'

const Container = (props) => {
  const { colorMode } = useColorMode()
  return (
    <Box
      width='full'
      maxWidth='1280px'
      mx='auto'
      px={2}
      bg={colorMode === 'light' ? (props.bg || props.background) : '#1A202C'}
      {...props}
    />
  )
}

export default memo(Container)
