import React from 'react'
import {
  ModalHeader
} from '@chakra-ui/core'

const NewModal = ({ children, ...rest }) => {
  return (
    <ModalHeader textAlign='center' borderBottom='1px solid #b7b7b7' {...rest}>
      {children}
    </ModalHeader>
  )
}

export default NewModal
