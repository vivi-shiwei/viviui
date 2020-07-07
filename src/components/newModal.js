import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody
} from '@chakra-ui/core'

const NewClsModal = ({ classesRef, mdalHeader, isOpen, onClose, schoolId, schoolDashboardId, refetch, children }) => {
  return (
    <Modal
      finalFocusRef={classesRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent h={{ base: '100%', sm: 'auto' }} maxH='100%' my={{ base: 0, sm: '3.75rem' }}>
        <ModalHeader>{mdalHeader}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default NewClsModal
