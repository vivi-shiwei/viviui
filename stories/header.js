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
import DrawerItemDivider from '../src/components/header/drawerItemDivider'
import DrawerItemButton from '../src/components/header/drawerItemButton'
import HeaderMenuButton from '../src/components/header/headerMenuButton'
import HeaderButton from '../src/components/header/headerButton'
import HeaderLogo from '../src/components/header/headerLogo'
import { MdAccessibility, MdPalette, MdSettings, MdDashboard } from 'react-icons/md'
import { IoMdPaper, IoMdHome, IoMdSearch } from 'react-icons/io'

import { AiOutlineLogout } from 'react-icons/ai'

import MyImage from '../static/QQ20200518181405.jpg'

export default { title: 'Header' }

export const header = () => {
  return (
    <Header
      left={
        <>
          <HeaderButton icon={MdAccessibility} title='左邊按鈕' href='https://www.baidu.com' />
          <HeaderButton icon={MdAccessibility} title='左邊按鈕' href='https://www.baidu.com' />
          <HeaderButton icon={MdAccessibility} title='左邊按鈕' href='https://www.baidu.com' />
        </>
      }
      logo={<HeaderLogo icon={<Box as={IoMdHome} size={6} />} />}
      right={
        <>
          <HeaderButton title='右邊按鈕' icon={MdAccessibility} href='https://www.baidu.com' />
          <Menu>
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
        </>
      }
      center={<HeaderButton icon={MdAccessibility} title='中间按鈕' href='https://www.baidu.com' />}
      drawerBody={
        <>
          <DrawerItemButton>首页</DrawerItemButton>
          <DrawerItemDivider />
          <DrawerItemButton>关于</DrawerItemButton>
          <DrawerItemDivider />
          <DrawerItemButton>哈哈</DrawerItemButton>
          <DrawerItemDivider />
        </>
      }
    />
  )
}
export const withonlylogo = () => {
  return (
    <Header
      logo={<HeaderLogo icon={<Box as={IoMdHome} size={6} />} />}
    />
  )
}

export const leftWithIconAndTitle = () => {
  return (
    <Header
      left={
        <>
          <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
          <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
        </>
      }
    />
  )
}

export const leftWithTitle = () => {
  return (
    <Header
      left={
        <>
          <HeaderButton title='首页' href='https://www.baidu.com' />
          <HeaderButton title='关于' href='https://www.baidu.com' />
        </>
      }
    />
  )
}
export const leftWithDrawer = () => {
  return (
    <Header
      logo={<HeaderLogo icon={<Box as={IoMdHome} size={6} />} />}
      left={
        <>
          <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
          <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
        </>
      }
      drawerBody={
        <>
          <DrawerItemButton icon={MdAccessibility}>首页</DrawerItemButton>
          <DrawerItemDivider />
          <DrawerItemButton icon={MdAccessibility}>关于</DrawerItemButton>
          <DrawerItemDivider />
        </>
      }
    />
  )
}
export const centerWithIconAndButton = () => {
  return (
    <Header
      center={
        <>
          <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
          <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
        </>
      }
    />
  )
}

export const centerWithButtonTitle = () => {
  return (
    <Header
      logo={<HeaderLogo icon={<Box as={IoMdHome} size={6} />} />}
      center={
        <>
          <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
          <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
        </>
      }
    />
  )
}

export const WithIconAndButton = () => {
  return (
    <Header
      logo={<HeaderLogo icon={<Box as={IoMdHome} size={6} />} />}
      left={
        <>
          <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
          <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
        </>
      }
      right={
        <>
          <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
          <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
        </>
      }
      center={
        <>
          <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
          <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
        </>
      }
    />
  )
}

export const Withthree = () => {
  return (
    <Header
      logo={<HeaderLogo icon={<Box as={IoMdHome} size={6} />} />}
      left={
        <>
          <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
          <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
        </>
      }
      right={
        <>
          <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
          <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
        </>
      }
      center={
        <>
          <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
          <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
        </>
      }
      drawerBody={
        <>
          <DrawerItemButton icon={MdAccessibility}>首页</DrawerItemButton>
          <DrawerItemDivider />
          <DrawerItemButton icon={MdAccessibility}>关于</DrawerItemButton>
          <DrawerItemDivider />
          <DrawerItemButton icon={MdAccessibility}>首页</DrawerItemButton>
          <DrawerItemDivider />
          <DrawerItemButton icon={MdAccessibility}>关于</DrawerItemButton>
          <DrawerItemDivider />
          <DrawerItemButton icon={MdAccessibility}>首页</DrawerItemButton>
          <DrawerItemDivider />
          <DrawerItemButton icon={MdAccessibility}>关于</DrawerItemButton>
          <DrawerItemDivider />
        </>
      }
    />
  )
}

export const rightphotou = () => {
  return (
    <Header
      logo={<HeaderLogo icon={<Box as={IoMdHome} size={6} />} />}
      right={
        <>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        </>
      }
    />
  )
}

export const rightIcons = () => {
  return (
    <Header
      logo={<HeaderLogo icon={<Box as={IoMdHome} size={6} />} />}
      right={
        <>
          <HeaderLogo icon={<Box as={IoMdHome} size={6} />} />
        </>
      }
    />
  )
}

export const leftIcons = () => {
  return (
    <Header
      logo={<HeaderLogo icon={<Box as={IoMdHome} size={6} />} />}
      left={
        <>
          <HeaderLogo icon={<Box as={IoMdHome} size={6} />} />
        </>
      }
    />
  )
}

export const centerIcons = () => {
  return (
    <Header
      logo={<HeaderLogo icon={<Box as={IoMdHome} size={6} />} />}
      center={
        <>
          <HeaderLogo icon={<Box as={IoMdHome} size={6} />} />
        </>
      }
    />
  )
}

export const loginPaper = () => {
  const Logo = () => (
    <>
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
    </>
  )
  const HeaderRight = () => (
    <>
      <Box>
        <NextLink
          passHref
          href='https://www.baidu.com'
        >
          <Button as='a' bg='transparent' border='1px' px={2} h={{ base: '35px', sm: '38px' }}>
            登入
          </Button>
        </NextLink>
      </Box>
    </>
  )
  return (
    <Header
      logo={<Logo />}
      right={<HeaderRight />}
    />
  )
}

export const AfterLoginPaper = () => {
  const Logo = () => (
    <>
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
    </>
  )

  const HeaderCenter = () => (
    <>
      <HeaderButton icon={IoMdPaper} title='首頁' />
      <HeaderButton icon={MdDashboard} title='学校專頁' />
      <HeaderButton icon={IoMdSearch} title='搜索' />
    </>
  )

  const HeaderRight = () => (
    <>
      <Menu placement='bottom-end'>
        <MenuButton as='div'>
          <Avatar name='vivi' src={MyImage} size='sm' cursor='pointer' display={{ base: 'none', sm: 'none', md: 'flex' }} />
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
    </>
  )

  const DrawerBody = () => (
    <>
      <DrawerItemButton icon={IoMdPaper}>首頁</DrawerItemButton>
      <DrawerItemDivider />
      <DrawerItemButton icon={MdDashboard}>学校專頁</DrawerItemButton>
      <DrawerItemDivider />
      <DrawerItemButton icon={IoMdSearch}>搜索</DrawerItemButton>
      <DrawerItemDivider />
      <DrawerItemButton icon={IoMdHome}>返回 Macau School</DrawerItemButton>
      <DrawerItemDivider />
      <DrawerItemButton icon={AiOutlineLogout}>登出</DrawerItemButton>
      <DrawerItemDivider />
    </>
  )

  return (
    <Header
      logo={<Logo />}
      center={<HeaderCenter />}

      right={<HeaderRight />}
      drawerBody={<DrawerBody />}
    />
  )
}
