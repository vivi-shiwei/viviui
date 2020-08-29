import React from 'react'
import {
  ModalHeader
} from '@chakra-ui/core'

const ModalWithHeader = ({ children, ...rest }) => {
  return (
    <ModalHeader {...rest}>
      {children}
    </ModalHeader>
  )
}

export default ModalWithHeader
