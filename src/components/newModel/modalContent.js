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

const NewModal = ({ mdalHeader, openModal, size, onOpen, closeButton, modalWithBody, isOpen, onClose, modalWithFooter, children, ...rest }) => {
  return (
    <>
      <ModalContent h={{ base: '100%', sm: 'auto' }} maxH='100%' my={{ base: 0, sm: '3.75rem' }} {...rest}>
        {mdalHeader}
        {!!closeButton && <ModalCloseButton />}
        <ModalBody pb={6}>
          {modalWithBody}
          {children}
        </ModalBody>
        <ModalFooter>
          {modalWithFooter}
        </ModalFooter>
      </ModalContent>
    </>
  )
}

export default NewModal
