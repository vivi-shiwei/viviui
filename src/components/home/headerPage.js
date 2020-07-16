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
  useDisclosure,
  Stack,
  MenuButton,
  Menu,
  Avatar,
  MenuList,
  DrawerCloseButton,
  ButtonGroup
} from '@chakra-ui/core'
import {
  Header as HeaderContainer
} from '../DocsHeaderPage'
import { Container } from '../containerPage'
import { FiAlignJustify } from 'react-icons/fi'
import { IoMdPerson, IoMdHome } from 'react-icons/io'
import { MdDashboard, MdAccessibility, MdPhoto, MdShowChart } from 'react-icons/md'

// const Logo = (props) => (
//   <Box as='a' href='#'>
//     {props.icon}
//   </Box>
// )
export const Left = ({ logo, text, children }) => {
  const Logo = (
    <Heading as='h1' size='lg' letterSpacing='-.1rem'>
      <Box as='span' d={{ base: 'none', sm: 'inline' }}>
        Macau School
      </Box>
      <Box as='span' d={{ base: 'inline', sm: 'none' }}>
        MS
      </Box>
      <Box as='span' color='blue.500' d={{ base: 'none', md: 'inline' }}>
        {' '}學不停
      </Box>
    </Heading>
  )
  return (
    <Box display='flex' alignItems='center'>
      {!!logo && (
        <Heading as='h1' size='lg' letterSpacing='-.1rem'>
          <Box as='span' d={{ base: 'none', sm: 'inline' }}>
            Macau School
          </Box>
          <Box as='span' d={{ base: 'inline', sm: 'none' }}>
            MS
          </Box>
          <Box as='span' color='blue.500' d={{ base: 'none', md: 'inline' }}>
            {' '}學不停
          </Box>
        </Heading>)}
      {!!text && (
        <Heading as='h1' fontSize={{ base: '20px', md: '24px' }} letterSpacing='-.1rem' my='auto'>
          <Box as='span' ml='3'>
            {text}
          </Box>
        </Heading>
      )}
      {children}
    </Box>
  )
}
export const Center = ({ logo, text, children }) => {
  return (
    <>
      <ButtonGroup>
        <Button
          as='a'
          align='center'
          variant='link'
          fontSize='lg'
          px={{ base: 0, sm: 4 }}
        >
          <Box m={0} color='currentColor' ml={{ base: 0, md: -1 }} mr={{ base: 0, md: 1 }}>
            <IoMdPerson size='1.5em' />
          </Box>
              首頁
        </Button>
        <Button
          as='a'
          align='center'
          variant='link'
          fontSize='lg'
          px={{ base: 0, sm: 4 }}
        >
          <Box m={0} color='currentColor' ml={{ base: 0, md: -1 }} mr={{ base: 0, md: 1 }}>
            <MdDashboard size='1.5em' />
          </Box>
              學校專頁
        </Button>
      </ButtonGroup>
    </>
  )
}

export const Right = ({ logo, profilePhoto, MenuTest, noColormode = false, disclosure, children }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = { light: 'white', dark: 'gray.800' }
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Flex
        align='center'
        justify='flex-end'
      >
        {(!!profilePhoto || !!MenuTest) && (
          <Stack align='center' isInline spacing='2' display={{ base: 'none', sm: 'none', md: 'block' }}>
            <Menu placement='bottom-end'>
              <MenuButton as='div'>
                <Avatar
                  src={profilePhoto}
                  size='sm'
                  cursor='pointer'
                />
              </MenuButton>
              <MenuList w='280px'>
                {MenuTest}
              </MenuList>
            </Menu>
          </Stack>
        )}
        {noColormode && (
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
        {!!disclosure && (
          <>
            <Button variantColor='none' onClick={onOpen} display={{ sm: 'block', md: 'none' }} size='xs'>
              <Box fontSize={{ base: '22px', sm: '28px' }} color={colorMode === 'light' ? 'black' : 'white'} as={FiAlignJustify} />
            </Button>
            <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth='1px'>選項</DrawerHeader>
                <DrawerBody fontSize={{ sm: 'xs', md: 'sm' }}>
                  {/* {children.map((a, i) => <Box key={i} my={3}>{a}</Box>)} */}
                  {MenuTest}
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        )}
      </Flex>
    </>
  )
}
const Header = ({ left, right, text, logo, profilePhoto, noColormode = false, MenuTest, children, disclosure, ...props }) => {
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
          {children}
          {/* {(!!logo || !!left) && (
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
          <Box display={{ base: 'none', sm: 'none', md: 'block' }}>
            {children}
          </Box>
          {(!!right || !!profilePhoto || disclosure) && (
            <Flex
              align='center'
              justify='flex-end'
            >
              {(!!profilePhoto && !!MenuTest) ? (
                <Stack align='center' isInline spacing='2' display={{ base: 'none', sm: 'none', md: 'block' }}>
                  <Menu placement='bottom-end'>
                    <MenuButton as='div'>
                      <Avatar
                        src={profilePhoto}
                        size='sm'
                        cursor='pointer'
                      />
                    </MenuButton>
                    <MenuList w='280px'>
                      {MenuTest}
                    </MenuList>
                  </Menu>
                </Stack>
              ) : (
                <Avatar
                  src={profilePhoto}
                  size='sm'
                  cursor='pointer'
                />
              )}
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
              {!!disclosure && (
                <>
                  <Button variantColor='none' onClick={onOpen} display={{ sm: 'block', md: 'none' }} size='xs'>
                    <Box fontSize={{ base: '22px', sm: '28px' }} color={colorMode === 'light' ? 'black' : 'white'} as={FiAlignJustify} />
                  </Button>
                  <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerCloseButton />
                      <DrawerHeader borderBottomWidth='1px'>選項</DrawerHeader>
                      <DrawerBody fontSize={{ sm: 'xs', md: 'sm' }}>
                       {children.map((a, i) => <Box key={i} my={3}>{a}</Box>)}
                        {MenuTest}
                      </DrawerBody>
                    </DrawerContent>
                  </Drawer>
                </>
              )}
            </Flex>
          )} */}
        </Flex>
      </Container>
    </HeaderContainer>
  )
}

export default Header
