import React from 'react'
import {
  Box,
  useColorMode
} from '@chakra-ui/core'

// 左右兩弧度為 999px 的 Button
const LeftFieldset = (props) => {
  const { colorMode } = useColorMode()
  return (
    <Box
      bg={colorMode === 'light' ? (props.bg || props.background || '#EDF2F7') : (props.dark || '#1A202C')}
      position=' absolute'
      top='0'
      left=' 0'
      {...props}
    />
    // <Button
    //   as='div'
    //   borderWidth='1px'
    //   rounded='999px'
    //   bg={colorMode === 'light' ? (props.bg || props.background || '#EDF2F7') : (props.dark || '#1A202C')}
    //   minW={{ base: '80px', sm: '110px' }}
    //   zIndex='4'
    //   _hover={{
    //     bg: colorMode === 'light' ? (props.bg || props.background || '#E2E8F0') : (props.hoverDark || '#171923')
    //   }}
    //   position='absolute'
    //   top='0'
    //   left=' 0'
    //   {...props}
    // />
  )
}

export default LeftFieldset
