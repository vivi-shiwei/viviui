import React, { useRef } from 'react'
import {
  Box, Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/core'
import Container from '../container'

const ModalSelector = ({ topAdmin, leftY, value, rightY, modalTitle, children, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box as='main' {...props}>
      <Container>
        {topAdmin}
        <Box display='flex' justifyContent='center' m='auto' mt='10px'>
          {leftY}
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
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent
                marginTop='0px'
                d='flex'
                my={{ base: '0px', md: '0rem' }}
                h={{ base: '100%', md: '500px' }}
                maxH={{ base: '100%', md: '500px' }}
              >
                <ModalHeader>{modalTitle}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  {children}
                </ModalBody>
              </ModalContent>
            </Modal>
          )}
          {rightY}
        </Box>
      </Container>

    </Box>
  )
}

export default ModalSelector
