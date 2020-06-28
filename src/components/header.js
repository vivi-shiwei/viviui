import React from 'react'
import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  Stack,
  ButtonGroup,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  Heading,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/core'
import GitHubButton from './GitHubButton'
import {
  Header as HeaderContainer,
  GithubLink,
  StorybookLink
} from './DocsHeader'
import { Container } from './container'
import { FiAlignJustify } from 'react-icons/fi'

const Logo = (props) => (
  <Box as='a' href='#'>
    {props.icon}
  </Box>
)
const Header = ({ left, right, text, logo, children, Disclosure, ...props }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const bg = { light: 'white', dark: 'gray.800' }

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
              <IconButton
                aria-label={`Switch to ${
                  colorMode === 'light' ? 'dark' : 'light'
                } mode`}
                variant='ghost'
                color='current'
                fontSize={{ base: '18px', sm: '24px', md: '34px' }}
                onClick={toggleColorMode}
                icon={colorMode === 'light' ? 'moon' : 'sun'}
                size='xs'
              />
              <Button variantColor='none' onClick={onOpen} display={{ sm: 'block', md: 'none' }} size='xs'>
                <Box fontSize={{ base: '20px', sm: '28px' }} color={colorMode === 'light' ? 'black' : 'white'} as={FiAlignJustify} />
              </Button>
              <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerHeader borderBottomWidth='1px'>選項</DrawerHeader>
                  <DrawerBody>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Flex>
          )}
        </Flex>
      </Container>
    </HeaderContainer>
  )
}

export default Header
