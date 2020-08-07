import React from 'react'
import {
  Button
} from '@chakra-ui/core'

// 编辑按钮
const EditButton = (props) => {
  return (
    <Button
      as='div'
      boxShadow='-4px 0 6px 6px #ffffff'
      border='1px solid #718096'
      p={{ base: '5px 16px', md: '7px 20px' }}
      borderRadius='30px'
      fontSize='13px'
      cursor='pointer'
      color='#718096'
      background='#ffffff'
      {...props}
    />
  )
}

export default EditButton
