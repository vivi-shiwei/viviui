import React, { useContext, useEffect } from 'react'
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

import Container from '../container'
import { UserContext } from './userContext'

const ModalSelector = ({ left, value, right, modalTitle, children, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    setUser({
      value: value,
      onClose
    })
  }, [])

  return (
    <Box display='flex' justifyContent='center' m='auto' mt='10px' {...props}>
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
        {!!user && !!user.value ? user.value : value}
      </Button>

      {isOpen && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            marginTop='0px'
            d='flex'
            my={{ base: '0px', md: '0rem' }}
            h={{ base: '100%', md: '500px' }}
            maxH={{ base: '100%', md: '500px' }}
          >
            {!!modalTitle && <ModalHeader>{modalTitle}</ModalHeader>}
            <ModalCloseButton />
            <ModalBody>
              {children}
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
      {right}
    </Box>
  )
}

export default ModalSelector
