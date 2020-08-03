import React from 'react'
import { IconButton } from '@chakra-ui/core'

// 刪除按鈕
const DeleteButton = (props) => {
  return (
    <IconButton
      as='div'
      icon='delete'
      {...props}
    />
  )
}

export default DeleteButton
