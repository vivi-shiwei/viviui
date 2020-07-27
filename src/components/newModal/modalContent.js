import React from 'react'
import {
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter
} from '@chakra-ui/core'

const NewModal = ({ mdalHeader, closeButton, modalWithBody, isOpen, onClose, modalWithFooter, children, ...rest }) => {
  return (
    <>
      <ModalContent h={{ base: '100%', sm: 'auto' }} maxH='100%' my={{ base: 0, sm: '3.75rem' }} {...rest}>
        {mdalHeader}
        {!!closeButton && <ModalCloseButton />}
        <ModalBody pb={6}>
          {modalWithBody}
          {children}
        </ModalBody>
        {!!modalWithFooter &&
          <ModalFooter>
            {modalWithFooter}
          </ModalFooter>}
      </ModalContent>
    </>
  )
}

export default NewModal
