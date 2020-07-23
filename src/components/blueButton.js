import React from 'react'
import {
  Button
} from '@chakra-ui/core'

const NewClsModal = ({ refetch, children, ...rest }) => {
  return (
    <Button variantColor='blue' {...rest}>
      {children}
    </Button>
  )
}

export default NewClsModal
