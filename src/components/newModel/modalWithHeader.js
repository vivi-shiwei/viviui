import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter
} from '@chakra-ui/core'

const NewModal = ({ children, ...rest }) => {
  return (
    <ModalHeader textAlign='center' borderBottom='1px solid #b7b7b7' {...rest}>
      {children}
    </ModalHeader>
  )
}

export default NewModal
