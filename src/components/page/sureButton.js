import React from 'react'
import {
  Button
} from '@chakra-ui/core'
// 確認按鈕
const SureButton = (props) => {
  return (
    <Button
      variantColor='blue'
      minW={{ base: '100%', sm: '100%', md: '200px' }}
      mr={3}
      mt={8}
      {...props}
    />
  )
}

export default SureButton
