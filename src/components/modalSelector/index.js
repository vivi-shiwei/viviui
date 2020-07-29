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
import HeaderContainer from '../container'

const ModalSelector = ({ topAdmin, leftY, value, rightY, children, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef()
  return (
    <Box as='main' {...props}>
      <HeaderContainer>
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
          >{value}
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
                  <ModalHeader>Dashboard選擇</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    {children}
                  </ModalBody>
                </ModalContent>
              </Modal>
            )}
          </Button>
          {rightY}
        </Box>
      </HeaderContainer>

    </Box>
  )
}

export default ModalSelector
