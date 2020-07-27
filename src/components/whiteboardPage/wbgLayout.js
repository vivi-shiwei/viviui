import React from 'react'
import {
  Box
} from '@chakra-ui/core'

const WhiteBoard = (props) => {
  return (
    <Box
      as='section'
      mx='auto'
      w='100%'
      maxW={{ base: '100%', sm: '100%', md: '800px' }}
      background='white'
      rounded={8}
      transition='0.3s'
      {...props}
    />
  )
}

export default WhiteBoard
