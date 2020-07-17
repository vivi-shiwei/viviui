import React from 'react'
import {
  Box,
  Flex,
  useColorMode,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
  DrawerCloseButton
} from '@chakra-ui/core'
import {
  Header as HeaderContainer
} from '../DocsHeaderPage'
import { Container } from '../containerPage'
import NextLink from 'next/link'
import { FiAlignJustify } from 'react-icons/fi'
import HeaderLeft from './headerLeft'
import HeaderRight from './headerRight'
import HeaderLogo from './headerLogo'
import HeaderCenter from './headerCenter'
import Drawers from './drawers'

const Header = ({ left, center, right, text, logo, logoHref, profilePhoto, noColormode = false, MenuTest, children, disclosure, ...props }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = { light: 'white', dark: 'gray.800' }
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <HeaderContainer bg={bg[colorMode]}>
      <Container
        h='100%'
        height='4rem'
        {...props}
      >
        <Flex size='100%' px={{ base: 0, sm: 2, md: 4 }} align='center' w='full'>

          <HeaderLogo href={logoHref}>
            {logo}
          </HeaderLogo>
          <HeaderLeft>
            {left}
          </HeaderLeft>
          <HeaderCenter>
            {center}
          </HeaderCenter>
          <HeaderRight>
            {right}
          </HeaderRight>

          {children}
          <Button variantColor='none' onClick={onOpen} display={{ sm: 'block', md: 'none' }} size='xs' position='absolute' right='0px'>
            <Box fontSize={{ base: '22px', sm: '28px' }} color={colorMode === 'light' ? 'black' : 'white'} as={FiAlignJustify} />
          </Button>
          <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth='1px'>選項</DrawerHeader>
              <DrawerBody fontSize={{ sm: 'xs', md: 'sm' }}>
                <p>1</p>
                <p>2</p>
                <p>3</p>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Container>
    </HeaderContainer>
  )
}
export default Header
