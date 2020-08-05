import React from 'react'
import {
  Button
} from '@chakra-ui/core'

// 返回按鈕
const BackButton = (props) => {
  return (
    <Button
      backgroundColor='#c2c2c2'
      minW={{ base: '100%', sm: '100%', md: '200px' }}
      mr={3}
      mt={8}
      color='white'
      _hover={{
        backgroundColor: '#b8b8b8'
      }}
      _active={{
        boxShadow: '0 0 0 3px rgba(175, 175, 175, 0.6)'
      }}
      {...props}
    />
  )
}

export default BackButton
