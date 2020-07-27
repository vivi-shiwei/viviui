import React from 'react'
import {
  Modal,
  ModalOverlay
} from '@chakra-ui/core'

const NewModal = ({ mdalHeader, openModal, size, onOpen, closeButton, modalWithBody, noModalOverlay = false, modalcontent, isOpen, onClose, modalWithFooter, children, ...rest }) => {
  return (
    <>
      {openModal}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={size}
        {...rest}
      >
        {!noModalOverlay && (<ModalOverlay />)}
        {modalcontent}
        {children}
      </Modal>
    </>
  )
}

export default NewModal
