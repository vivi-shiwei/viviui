import React from 'react'
import { Button } from '@chakra-ui/core'

const AddButton = ({ children, ...props }) => {
  return (
    <Button
      borderWidth='1px'
      rounded='999px'
      minW={{ base: '80px', sm: '110px' }}
      zIndex='1'
      position=' absolute'
      top='0'
      left=' 0'
      {...props}
    >
      {children}
    </Button>
  )
}

export default AddButton