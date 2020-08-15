import React from 'react'
import {
  Button
} from '@chakra-ui/core'

// 確認按鈕
const ConfirmButton = (props) => {
  return (
    <Button
      as='div'
      variantColor='teal'
      w={{ base: '48%', sm: '30%' }}
      fontSize='16px'
      {...props}
    />
  )
}
export default ConfirmButton
