import React from 'react'
import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  Heading,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure
} from '@chakra-ui/core'
import {
  Header as HeaderContainer
} from './DocsHeaderPage'
import { Container } from './containerPage'
import { FiAlignJustify } from 'react-icons/fi'

const Logo = (props) => (
  <Box as='a' href='#'>
    {props.icon}
  </Box>
)
const Header = ({ left, right, text, logo, noColormode = false, children, Disclosure, ...props }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = { light: 'white', dark: 'gray.800' }
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <HeaderContainer bg={bg[colorMode]} {...props}>
      <Container
        h='100%'
        height='4rem'
      >
        <Flex size='100%' px={{ base: 0, sm: 2, md: 4 }} align='center' justify='space-between'>
          {(!!logo || !!left) && (
            <Box display='flex' alignItems='center'>
              {!!logo && <Logo icon={logo} />}
              {!!left && (
                <Heading as='h1' fontSize={{ base: '20px', md: '24px' }} letterSpacing='-.1rem' my='auto'>
                  <Box as='span' ml='3'>
                    {left}
                  </Box>
                </Heading>
              )}
            </Box>
          )}

          {children}
          {!!right && (
            <Flex
              align='center'
              justify='flex-end'
            >

              {right}
              {!noColormode && (
                <IconButton
                  aria-label={`Switch to ${
                    colorMode === 'light' ? 'dark' : 'light'
                  }mode`}
                  variant='ghost'
                  color='current'
                  fontSize={{ base: '20px', sm: '24px', md: '34px' }}
                  onClick={toggleColorMode}
                  icon={colorMode === 'light' ? 'moon' : 'sun'}
                  size='xs'
                />
              )}
              {!!Disclosure && (
                <>
                  <Button variantColor='none' onClick={onOpen} display={{ sm: 'block', md: 'none' }} size='xs'>
                    <Box fontSize={{ base: '22px', sm: '28px' }} color={colorMode === 'light' ? 'black' : 'white'} as={FiAlignJustify} />
                  </Button>
                  <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerHeader borderBottomWidth='1px'>選項</DrawerHeader>
                      <DrawerBody>
                        {Disclosure}
                      </DrawerBody>
                    </DrawerContent>
                  </Drawer>
                </>
              )}
            </Flex>
          )}
        </Flex>
      </Container>
    </HeaderContainer>
  )
}

export default Header
