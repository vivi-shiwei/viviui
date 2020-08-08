import React from 'react'
import {
  Box
} from '@chakra-ui/core'

const FullscreenViewContainer = (props) => {
  return (
    <Box
      pos='fixed'
      top={0}
      left={0}
      right={0}
      bottom={0}
      w='100%'
      h='100%'
      d='flex'
      alignItems='center'
      justifyContent='flex-start'
      flexDirection='column'
      zIndex='4000'
      overflowY='auto'
      {...props}
    />
  )
}
export default FullscreenViewContainer
