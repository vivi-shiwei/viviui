import React from 'react'

import {
  Button,
  Menu,
  Avatar,
  MenuButton,
  MenuItem,
  Box,
  MenuList,
  Link,
  Heading
} from '@chakra-ui/core'
import NextLink from 'next/link'
import Header from '../src/components/header'
import DrawerItemDivider from '../src/components/header/drawerItemDivider'
import DrawerItemButton from '../src/components/header/drawerItemButton'
import HeaderMenuButton from '../src/components/header/headerMenuButton'
import HeaderLogo from '../src/components/header/headerLogo'
import HeaderCenter from '../src/components/header/headerCenter'
import HeaderMobileNav from '../src/components/header/headerMobileNav'
import HeaderLeft from '../src/components/header/headerLeft'
import HeaderRight from '../src/components/header/headerRight'
import HeaderButton from '../src/components/header/headerButton'
import { MdAccessibility, MdDashboard } from 'react-icons/md'
import { IoMdPaper, IoMdHome, IoMdSearch } from 'react-icons/io'

import { AiOutlineLogout } from 'react-icons/ai'

import MyImage from '../static/QQ20200518181405.jpg'

export default { title: 'Header' }

export const header = () => {
  return (
    <Header>
      <HeaderLogo>
        <NextLink
          href='https://www.baidu.com'
          passHref
        >
          <Box as='a'>
            <Box as={IoMdHome} size={6} />
          </Box>
        </NextLink>
      </HeaderLogo>

      <HeaderLeft>
        <HeaderButton icon={MdAccessibility} title='左邊按鈕' href='https://www.baidu.com' />
        <HeaderButton icon={MdAccessibility} title='左邊按鈕' href='https://www.baidu.com' />
        <HeaderButton icon={MdAccessibility} title='左邊按鈕' href='https://www.baidu.com' />
      </HeaderLeft>

      <HeaderCenter>
        <HeaderButton icon={MdAccessibility} title='中间按鈕' href='https://www.baidu.com' />
      </HeaderCenter>

      <HeaderRight>
        <HeaderButton title='右邊按鈕' icon={MdAccessibility} href='https://www.baidu.com' />
        <Menu placement='bottom-end'>
          <HeaderMenuButton display={{ base: 'none', sm: 'none', md: 'flex' }}>
            Actions
          </HeaderMenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem as='a' href='#'>
              Attend a Workshop
            </MenuItem>
          </MenuList>
        </Menu>
      </HeaderRight>

      <HeaderMobileNav>
        <DrawerItemButton>首页</DrawerItemButton>
        <DrawerItemDivider />
        <DrawerItemButton>关于</DrawerItemButton>
        <DrawerItemDivider />
        <DrawerItemButton>哈哈</DrawerItemButton>
        <DrawerItemDivider />
      </HeaderMobileNav>
    </Header>
  )
}

export const withonlylogo = () => {
  return (
    <Header>
      <HeaderLogo>
        <NextLink
          href='https://www.baidu.com'
          passHref
        >
          <Box as='a'>
            <Box as={IoMdHome} size={6} />
          </Box>
        </NextLink>
      </HeaderLogo>
    </Header>
  )
}

export const leftWithIconAndTitle = () => {
  return (
    <Header>
      <HeaderLeft>
        <HeaderButton icon={MdAccessibility} title='左邊按鈕' href='https://www.baidu.com' />
        <HeaderButton icon={MdAccessibility} title='左邊按鈕' href='https://www.baidu.com' />
        <HeaderButton icon={MdAccessibility} title='左邊按鈕' href='https://www.baidu.com' />
      </HeaderLeft>
    </Header>
  )
}

export const leftWithTitle = () => {
  return (
    <Header>
      <HeaderLeft>
        <HeaderButton title='首页' href='https://www.baidu.com' />
        <HeaderButton title='关于' href='https://www.baidu.com' />
      </HeaderLeft>
    </Header>
  )
}
export const leftWithDrawer = () => {
  return (
    <Header>
      <HeaderLogo>
        <NextLink
          href='https://www.baidu.com'
          passHref
        >
          <Box as='a'>
            <Box as={IoMdHome} size={6} />
          </Box>
        </NextLink>
      </HeaderLogo>
      <HeaderLeft>
        <HeaderButton title='首页' href='https://www.baidu.com' />
        <HeaderButton title='关于' href='https://www.baidu.com' />
      </HeaderLeft>
      <HeaderMobileNav>
        <DrawerItemButton>首页</DrawerItemButton>
        <DrawerItemDivider />
        <DrawerItemButton>关于</DrawerItemButton>
        <DrawerItemDivider />
        <DrawerItemButton>哈哈</DrawerItemButton>
        <DrawerItemDivider />
      </HeaderMobileNav>
    </Header>
  )
}
export const centerWithIconAndButton = () => {
  return (
    <Header>
      <HeaderCenter>
        <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
        <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
      </HeaderCenter>
    </Header>
  )
}

export const centerWithButtonTitle = () => {
  return (
    <Header>
      <HeaderLogo>
        <NextLink
          href='https://www.baidu.com'
          passHref
        >
          <Box as='a'>
            <Box as={IoMdHome} size={6} />
          </Box>
        </NextLink>
      </HeaderLogo>
      <HeaderCenter>
        <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
        <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
      </HeaderCenter>
    </Header>
  )
}

export const WithIconAndButton = () => {
  return (
    <Header>
      <HeaderLogo>
        <NextLink
          href='https://www.baidu.com'
          passHref
        >
          <Box as='a'>
            <Box as={IoMdHome} size={6} />
          </Box>
        </NextLink>
      </HeaderLogo>
      <HeaderCenter>
        <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
        <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
      </HeaderCenter>
      <HeaderLeft>
        <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
        <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
      </HeaderLeft>
      <HeaderRight>
        <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
        <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
      </HeaderRight>
    </Header>
  )
}

export const Withthree = () => {
  return (
    <Header>
      <HeaderLogo>
        <NextLink
          href='https://www.baidu.com'
          passHref
        >
          <Box as='a'>
            <Box as={IoMdHome} size={6} />
          </Box>
        </NextLink>
      </HeaderLogo>
      <HeaderCenter>
        <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
        <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
      </HeaderCenter>
      <HeaderLeft>
        <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
        <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
      </HeaderLeft>
      <HeaderRight>
        <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
        <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
      </HeaderRight>
      <HeaderMobileNav>
        <DrawerItemButton>首页</DrawerItemButton>
        <DrawerItemDivider />
        <DrawerItemButton>关于</DrawerItemButton>
        <DrawerItemDivider />
        <DrawerItemButton>哈哈</DrawerItemButton>
        <DrawerItemDivider />
      </HeaderMobileNav>
    </Header>
  )
}

export const rightphotou = () => {
  return (
    <Header>
      <HeaderLogo>
        <NextLink
          href='https://www.baidu.com'
          passHref
        >
          <Box as='a'>
            <Box as={IoMdHome} size={6} />
          </Box>
        </NextLink>
      </HeaderLogo>
      <HeaderRight>
        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
      </HeaderRight>
    </Header>
  )
}

export const rightIcons = () => {
  return (
    <Header>
      <HeaderLogo>
        <NextLink
          href='https://www.baidu.com'
          passHref
        >
          <Box as='a'>
            <Box as={IoMdHome} size={6} />
          </Box>
        </NextLink>
      </HeaderLogo>
      <HeaderRight>
        <Box as={IoMdHome} size={6} />
      </HeaderRight>
    </Header>
  )
}

export const leftIcons = () => {
  return (
    <Header>
      <HeaderLogo>
        <NextLink
          href='https://www.baidu.com'
          passHref
        >
          <Box as='a'>
            <Box as={IoMdHome} size={6} />
          </Box>
        </NextLink>
      </HeaderLogo>
      <HeaderLeft>
        <Box as={IoMdHome} size={6} />
      </HeaderLeft>
    </Header>
  )
}

export const centerIcons = () => {
  return (
    <Header>
      <HeaderLogo>
        <NextLink
          href='https://www.baidu.com'
          passHref
        >
          <Box as='a'>
            <Box as={IoMdHome} size={6} />
          </Box>
        </NextLink>
      </HeaderLogo>
      <HeaderCenter>
        <Box as={IoMdHome} size={6} />
      </HeaderCenter>
    </Header>
  )
}

export const loginPaper = () => {
  return (
    <Header>
      <HeaderLogo>
        <NextLink
          href='https://www.baidu.com'
          passHref
        >
          <Box as='a'>
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
          </Box>
        </NextLink>
      </HeaderLogo>
      <HeaderRight>
        <Box>
          <NextLink
            href='https://www.baidu.com'
            passHref
          >
            <Button as='a' bg='transparent' border='1px' px={2} h={{ base: '35px', sm: '38px' }}>
              登入
            </Button>
          </NextLink>
        </Box>
      </HeaderRight>
    </Header>
  )
}

export const AfterLoginPaper = () => {
  return (
    <Header>
      <HeaderLogo>
        <NextLink
          href='https://www.baidu.com'
          passHref
        >
          <Box as='a'>
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
          </Box>
        </NextLink>
      </HeaderLogo>
      <HeaderRight>
        <Menu placement='bottom-end'>
          <MenuButton as='div'>
            <Avatar name='vivi' src={MyImage} size='sm' cursor='pointer' />
          </MenuButton>
          <MenuList w='280px'>
            <NextLink href='/' passHref>
              <MenuItem as='a'>
                <Box as={IoMdHome} mr='4px' />
                <span>返回 Macau School</span>
              </MenuItem>
            </NextLink>
            <Link href='/'>
              <MenuItem>
                <Box as={AiOutlineLogout} mr='4px' />
                <span>登出</span>
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </HeaderRight>
    </Header>
  )
}

export const AfterPostLoginPaper = () => {
  return (
    <Header>
      <HeaderLogo>
        <NextLink
          href='https://www.baidu.com'
          passHref
        >
          <Box as='a'>
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
          </Box>
        </NextLink>
      </HeaderLogo>
      <HeaderCenter>
        <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
        <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
      </HeaderCenter>
      <HeaderRight>
        <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
        <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
        <Menu placement='bottom-end'>
          <MenuButton as='div'>
            <Avatar name='vivi' src={MyImage} size='sm' cursor='pointer' />
          </MenuButton>
          <MenuList w='280px'>
            <NextLink href='/' passHref>
              <MenuItem as='a'>
                <Box as={IoMdHome} mr='4px' />
                <span>返回 Macau School</span>
              </MenuItem>
            </NextLink>
            <Link href='/'>
              <MenuItem>
                <Box as={AiOutlineLogout} mr='4px' />
                <span>登出</span>
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </HeaderRight>
      <HeaderMobileNav>
        <DrawerItemButton>首页</DrawerItemButton>
        <DrawerItemDivider />
        <DrawerItemButton>关于</DrawerItemButton>
        <DrawerItemDivider />
        <DrawerItemButton>哈哈</DrawerItemButton>
        <DrawerItemDivider />
      </HeaderMobileNav>
    </Header>
  )
}
