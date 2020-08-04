import React from 'react'
import {
  Button
} from '@chakra-ui/core'

// 確認按鈕
const ConfirmButton = (props) => {
  return (
    <Button
      bg='#9370DB'
      color='white'
      _hover='color:black'
      fontSize={{ base: '12px', sm: '12px', md: '16px' }}
      m={{ base: '5px', sm: '5px' }}
      {...props}
    />
  )
}
export default ConfirmButton
