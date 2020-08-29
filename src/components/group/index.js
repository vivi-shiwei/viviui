import React from 'react'
import { useColorMode } from '@chakra-ui/core'

import Container from '../container'

// 卡片組
const Group = (props) => {
  const { colorMode } = useColorMode()
  return (
    <Container
      as='section'
      textAlign='center'
      pb={4}
      maxW='960px'
      {...props}
      bg={colorMode === 'light' ? (props.bg || props.background) : (props.dark || '#1A202C')}
    />
  )
}

export default Group
