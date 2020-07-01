import React from 'react'

import {
  ButtonGroup,
  Button,
  Stack,
  Menu,
  Avatar,
  MenuButton,
  MenuItem,
  Box,
  MenuList,
  Link,
  MenuDivider,
  Heading,
  Flex
} from '@chakra-ui/core'
import NextLink from 'next/link'
import Header from '../src/components/header'
import { MdAccessibility, MdPalette } from 'react-icons/md'
import { IoMdHome } from 'react-icons/io'
import { AiOutlineLogout } from 'react-icons/ai'

import MyImage from '../static/QQ20200518181405.jpg'

export default { title: 'Header' }

export const withHeader = () => {
  const Lo = (

    <Flex
      rounded='full'
      size={{ base: 8, sm: 10 }}
      bg='teal.500'
      align='center'
      justify='center'
    >
      <Box size={6} color='white' as={MdPalette} />
    </Flex>
  )
  const Right = (
    <Stack align='center' isInline spacing='2'>
      <Menu placement='bottom-end'>
        <MenuButton as='div'>
          <Avatar
            src={MyImage}
            w={{ base: '40px', md: '50px' }}
            h={{ base: '40px', md: '50px' }}
            cursor='pointer'
          />
        </MenuButton>
        <MenuList w='280px'>
          <NextLink href='/' passHref>
            <MenuItem as='a'>
              <Box as={IoMdHome} mr='4px' />
              <span>返回 Macau School</span>
            </MenuItem>
          </NextLink>
          <Link href='/api/auth/logout'>
            <MenuItem>
              <Box as={AiOutlineLogout} mr='4px' />
              <span>登出</span>
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Stack>

  )
  return (
    <Header logo={Lo} left='CHAKRA' right={Right} Disclosure='shfdodh'>

      <ButtonGroup>
        <NextLink
          passHref
          href='#'
        >
          <Button
            ref='#'
            as='a'
            flexDirection={{ base: 'column', md: 'row' }}
            align='center'
            variant='link'
            fontSize={{ base: 'xs', md: 'lg' }}
            px={{ base: 1, sm: 4 }}
          >
            首頁
          </Button>
        </NextLink>
        <NextLink
          passHref
          href='#'
        >
          <Button
            ref='#'
            as='a'
            flexDirection={{ base: 'column', md: 'row' }}
            align='center'
            variant='link'
            fontSize={{ base: 'xs', md: 'lg' }}
            px={{ base: 1, sm: 4 }}
          >
            學校專頁
          </Button>
        </NextLink>
      </ButtonGroup>
    </Header>
  )
}
export const nogitchidren = () => {
  const Right = (
    <Stack align='center' isInline spacing='1'>
      <MenuDivider />
      <Box>
        <NextLink href='/' passHref>
          <Button as='a' bg='transparent' border='1px' px={2}>
            登入
          </Button>
        </NextLink>
      </Box>
    </Stack>

  )
  const Lo = (

    <Flex
      rounded='full'
      size={10}
      bg='teal.500'
      align='center'
      justify='center'
    >
      <Box size={6} color='white' as={MdAccessibility} />
    </Flex>
  )
  return (
    <Header logo={Lo} left='CHAKRA' right={Right} />
  )
}

export const nologo = () => {
  const Right = (
    <Stack align='center' isInline spacing='1'>
      <MenuDivider />
      <Box>
        <NextLink href='/' passHref>
          <Button as='a' bg='transparent' border='1px' px={2}>
            登入
          </Button>
        </NextLink>
      </Box>
    </Stack>

  )

  return (
    <Header left='CHAKRA' right={Right} />
  )
}

export const withchlidren = () => {
  return (
    <Header>
      <Stack align='center' isInline spacing='1'>
        <MenuDivider />
        <Box>
          <NextLink href='/' passHref>
            <Button as='a' bg='transparent' border='1px' px={2}>
              登入
            </Button>
          </NextLink>
        </Box>
        <Heading as='h1' fontSize={{ base: '20px', md: '24px' }} letterSpacing='-.1rem' my='auto'>
          <Box as='span' ml='34px'>
            有一個姑娘
          </Box>
        </Heading>
        <Heading as='h1' fontSize={{ base: '20px', md: '24px' }} letterSpacing='-.1rem' my='auto'>
          <Box as='span' ml='35px'>
            有一個姑娘
          </Box>
        </Heading>
      </Stack>
    </Header>
  )
}
