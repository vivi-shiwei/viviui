import React from 'react'
import {
  Icon
} from '@chakra-ui/core'

// 刪除按鈕
const DeleteButton = ({ ...props }) => {
  return (
    <Icon
      name='delete'
      {...props}
    />
  )
}

export default DeleteButton
