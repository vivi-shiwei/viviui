import React from 'react'
import {
  Box,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/core'

import { ModalContext } from './modalContext'

const ModalSelector = ({ left, value, right, modalTitle, onChange, children, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box display='flex' justifyContent='center' mt='10px' {...props}>
      {left}
      <Button
        as='div'
        maxW='400px'
        lineHeight='40px'
        width='35%'
        textAlign='center'
        mx={3}
        borderColor='#CBD5E0'
        variant='outline'
        fontSize={{ base: '14px', md: '16px' }}
        overflow='hidden'
        d='block'
        whiteSpace='nowrap'
        textOverflow='ellipsis'
        onClick={onOpen}
      >
        {value}
      </Button>

      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          scrollBehavior='inside'
        >
          <ModalOverlay />
          <ModalContent>
            {!!modalTitle && <ModalHeader>{modalTitle}</ModalHeader>}
            <ModalCloseButton />
            <ModalBody>
              <ModalContext.Provider value={{ value, onChange, onClose }}>
                {children}
              </ModalContext.Provider>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
      {right}
    </Box>
  )
}

export default ModalSelector
