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
} from './DocsHeader'
import { Container } from './container'

const Logo = (props) => (
  <Box as='a' href='#'>
    {props.icon}
  </Box>
)
const Header = ({ left, right, text, logo, noColormode = false, children, Disclosure, ...props }) => {
  const { colorMode, toggleColorMode } = useColorMode()
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
              {Disclosure}
            </Flex>
          )}
        </Flex>
      </Container>
    </HeaderContainer>
  )
}

export default Header
