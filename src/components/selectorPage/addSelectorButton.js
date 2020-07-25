import React from 'react'
import { Button } from '@chakra-ui/core'

const AddSelectorButton = ({ title, children, ...props }) => {
  return (
    <Button
      as='div'
      fontSize={{ base: '14px', md: '16px' }}
      {...props}
    >
      {children}{title}
    </Button>
  )
}
export default AddSelectorButton
