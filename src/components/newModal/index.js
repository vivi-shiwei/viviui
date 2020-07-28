import React from 'react'
import {
  Modal
} from '@chakra-ui/core'

const NewModal = ({ mdalHeader, openModal, size, onOpen, closeButton, modalWithBody, modalcontent, isOpen, onClose, modalWithFooter, children, ...rest }) => {
  return (
    <>
      {openModal}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={size}
        {...rest}
      >
        {modalcontent}
        {children}
      </Modal>
    </>
  )
}

export default NewModal
