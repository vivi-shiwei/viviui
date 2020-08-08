import React from 'react'
import {
  Button,
  useColorMode
} from '@chakra-ui/core'

// 返回按鈕
const BackButton = (props) => {
  const { colorMode } = useColorMode()
  return (
    <Button
      backgroundColor='#c2c2c2'
      minW={{ base: '100%', sm: '100%', md: '200px' }}
      mr={3}
      mt={8}
      color={colorMode === 'light' ? 'white' : 'black'}
      _hover={{
        backgroundColor: '#718096'
      }}
      _active={{
        boxShadow: '0 0 0 3px rgba(175, 175, 175, 0.6)'
      }}
      {...props}
    />
  )
}

export default BackButton
