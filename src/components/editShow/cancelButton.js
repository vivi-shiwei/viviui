import React from 'react'
import {
  Button
} from '@chakra-ui/core'

// 取消按鈕
const CancelButton = ({ ...props }) => {
  return (
    <Button
      variantColor='cyan'
      w={{ base: '48%', sm: '30%' }}
      {...props}
    />
  )
}
export default CancelButton
