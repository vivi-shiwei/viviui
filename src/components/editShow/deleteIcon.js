import React from 'react'
import {
  IconButton
} from '@chakra-ui/core'

// 刪除按鈕
const DeleteButton = ({ ...props }) => {
  return (
    <IconButton
      icon='delete'
      variantColor='red'
      {...props}
    />
  )
}

export default DeleteButton
