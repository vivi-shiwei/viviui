import React from 'react'
import { Button } from '@chakra-ui/core'

const AddSelectorButton = ({ title, children, ...props }) => {
  return (
    <Button {...props}>
      {children}{title}
    </Button>
  )
}
export default AddSelectorButton
