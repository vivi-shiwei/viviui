import React, { memo } from 'react'
import {
  Box,
  Flex,
  useColorMode,
  Button,
  useDisclosure
} from '@chakra-ui/core'
import {
  Header as HeaderContainer
} from '../DocsHeaderPage'
import { Container } from '../containerPage'
import { AiOutlineMenu } from 'react-icons/ai'

import HeaderLeft from './headerLeft'
import HeaderRight from './headerRight'
import HeaderLogo from './headerLogo'
import HeaderCenter from './headerCenter'
import DrawerWithBody from './drawerWithBody'

const Header = ({ left, center, right, text, logo, logoHref, profilePhoto, drawerBody, children, disclosure, ...props }) => {
  const { colorMode } = useColorMode()
  const bg = { light: 'white', dark: 'gray.800' }
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <HeaderContainer bg={bg[colorMode]}>
      <Container
        h='100%'
        height='4rem'
        {...props}
      >
        <Flex size='100%' px={{ base: 0, sm: 2, md: 4 }} align='center' w='full' justify='space-between'>

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
          {!!drawerBody && (
            <Flex justify='flex-end'>
              <Button variantColor='none' onClick={onOpen} display={{ sm: 'block', md: 'none' }} size='xs'>
                <Box fontSize={{ base: '20px', sm: '24px' }} color={colorMode === 'light' ? 'black' : 'white'} as={AiOutlineMenu} />
              </Button>
              {isOpen && (
                <DrawerWithBody
                  isOpen={isOpen}
                  onClose={onClose}
                >
                  {drawerBody}
                </DrawerWithBody>
              )}
            </Flex>
          )}
        </Flex>
      </Container>
    </HeaderContainer>
  )
}
export default memo(Header)
