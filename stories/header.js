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
import { action } from '@storybook/addon-actions'
import { MdAccessibility, MdDashboard } from 'react-icons/md'
import { IoMdPaper, IoMdHome, IoMdSearch } from 'react-icons/io'

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

import { AiOutlineLogout } from 'react-icons/ai'

import MyImage from '../static/QQ20200518181405.jpg'

export default { title: 'Header(vivi)' }

export const header = () => {
  return (
    <Header>
      <HeaderLogo>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Box as={IoMdHome} size={6} />
          </a>
        </NextLink>
      </HeaderLogo>

      <HeaderLeft>
        <NextLink href='/test' passHref>
          {/* <a onClick={action('button-click')}> */}
          <HeaderButton ref='/test' icon={MdAccessibility} title='左邊按鈕' href='https://www.baidu.com' />
          {/* </a> */}
        </NextLink>
        <NextLink href='/test' passHref>
          {/* <a onClick={action('button-click')}> */}
          <HeaderButton ref='/test' icon={MdAccessibility} title='左邊按鈕' href='https://www.baidu.com' />
          {/* </a> */}
        </NextLink>
        <NextLink href='/test' passHref>
          {/* <a onClick={action('button-click')}> */}
          <HeaderButton ref='/test' icon={MdAccessibility} title='左邊按鈕' href='https://www.baidu.com' />
          {/* </a> */}
        </NextLink>
      </HeaderLeft>

      <HeaderCenter>
        <NextLink href='/test' passHref>
          {/* <a onClick={action('button-click')}> */}
          <HeaderButton ref='/test' icon={MdAccessibility} title='中间按鈕' href='https://www.baidu.com' />
          {/* </a> */}
        </NextLink>
      </HeaderCenter>

      <HeaderRight>
        <NextLink href='/test' passHref>
          {/* <a onClick={action('button-click')}> */}
          <HeaderButton ref='/test' title='右邊按鈕' icon={MdAccessibility} href='https://www.baidu.com' />
          {/* </a> */}
        </NextLink>
        <Menu placement='bottom-end'>
          <HeaderMenuButton display={{ base: 'none', sm: 'none', md: 'flex' }}>
            Actions
          </HeaderMenuButton>
          <MenuList>
            <NextLink href='/test' passHref>
              <a onClick={action('button-click')}>
                <MenuItem>Download</MenuItem>
              </a>
            </NextLink>
            <NextLink href='/test' passHref>
              <a onClick={action('button-click')}>
                <MenuItem>Create a Copy</MenuItem>
              </a>
            </NextLink>
            <NextLink href='/test' passHref>
              <a onClick={action('button-click')}>
                <MenuItem>Mark as Draft</MenuItem>
              </a>
            </NextLink>
            <NextLink href='/test' passHref>
              <a onClick={action('button-click')}>
                <MenuItem>Delete</MenuItem>
              </a>
            </NextLink>
            <NextLink href='/test' passHref>
              <a onClick={action('button-click')}>
                <MenuItem as='a' href='#'>
                  Attend a Workshop
                </MenuItem>
              </a>
            </NextLink>
          </MenuList>
        </Menu>
      </HeaderRight>

      <HeaderMobileNav>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <DrawerItemButton>首页</DrawerItemButton>
          </a>
        </NextLink>
        <DrawerItemDivider />
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <DrawerItemButton>关于</DrawerItemButton>
          </a>
        </NextLink>
        <DrawerItemDivider />
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <DrawerItemButton>哈哈</DrawerItemButton>
          </a>
        </NextLink>
        <DrawerItemDivider />
      </HeaderMobileNav>
    </Header>
  )
}

export const withonlylogo = () => {
  return (
    <Header>
      <HeaderLogo>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Box as={IoMdHome} size={6} />
          </a>
        </NextLink>
      </HeaderLogo>
    </Header>
  )
}

export const leftWithIconAndTitle = () => {
  return (
    <Header>
      <HeaderLeft>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <HeaderButton icon={MdAccessibility} title='左邊按鈕' href='https://www.baidu.com' />
          </a>
        </NextLink>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <HeaderButton icon={MdAccessibility} title='左邊按鈕' href='https://www.baidu.com' />
          </a>
        </NextLink>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <HeaderButton icon={MdAccessibility} title='左邊按鈕' href='https://www.baidu.com' />
          </a>
        </NextLink>
      </HeaderLeft>
    </Header>
  )
}

export const leftWithTitle = () => {
  return (
    <Header>
      <HeaderLeft>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <HeaderButton title='首页' href='https://www.baidu.com' />
          </a>
        </NextLink>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <HeaderButton title='关于' href='https://www.baidu.com' />
          </a>
        </NextLink>
      </HeaderLeft>
    </Header>
  )
}
export const leftWithDrawer = () => {
  return (
    <Header>
      <HeaderLogo>

        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Box as={IoMdHome} size={6} />
          </a>
        </NextLink>
      </HeaderLogo>
      <HeaderLeft>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <HeaderButton title='首页' href='https://www.baidu.com' />
          </a>
        </NextLink>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <HeaderButton title='关于' href='https://www.baidu.com' />
          </a>
        </NextLink>
      </HeaderLeft>
      <HeaderMobileNav>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <DrawerItemButton>首页</DrawerItemButton>
          </a>
        </NextLink>
        <DrawerItemDivider />
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <DrawerItemButton>关于</DrawerItemButton>
          </a>
        </NextLink>
        <DrawerItemDivider />
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <DrawerItemButton>哈哈</DrawerItemButton>
          </a>
        </NextLink>
        <DrawerItemDivider />
      </HeaderMobileNav>
    </Header>
  )
}
export const centerWithIconAndButton = () => {
  return (
    <Header>
      <HeaderCenter>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
          </a>
        </NextLink>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
          </a>
        </NextLink>
      </HeaderCenter>
    </Header>
  )
}

export const centerWithButtonTitle = () => {
  return (
    <Header>
      <HeaderLogo>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Box as={IoMdHome} size={6} />
          </a>
        </NextLink>
      </HeaderLogo>
      <HeaderCenter>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
          </a>
        </NextLink>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
          </a>
        </NextLink>
      </HeaderCenter>
    </Header>
  )
}

export const WithIconAndButton = () => {
  return (
    <Header>
      <HeaderLogo>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Box as={IoMdHome} size={6} />
          </a>
        </NextLink>
      </HeaderLogo>
      <HeaderCenter>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
          </a>
        </NextLink>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
          </a>
        </NextLink>
      </HeaderCenter>
      <HeaderLeft>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
          </a>
        </NextLink>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
          </a>
        </NextLink>
      </HeaderLeft>
      <HeaderRight>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
          </a>
        </NextLink>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
          </a>
        </NextLink>
      </HeaderRight>
    </Header>
  )
}

export const Withthree = () => {
  return (
    <Header>
      <HeaderLogo>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Box as={IoMdHome} size={6} />
          </a>
        </NextLink>
      </HeaderLogo>
      <HeaderCenter>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
          </a>
        </NextLink>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
          </a>
        </NextLink>
      </HeaderCenter>
      <HeaderLeft>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
          </a>
        </NextLink>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
          </a>
        </NextLink>
      </HeaderLeft>
      <HeaderRight>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
          </a>
        </NextLink>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
          </a>
        </NextLink>
      </HeaderRight>
      <HeaderMobileNav>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <DrawerItemButton>首页</DrawerItemButton>
          </a>
        </NextLink>
        <DrawerItemDivider />
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <DrawerItemButton>关于</DrawerItemButton>
          </a>
        </NextLink>
        <DrawerItemDivider />
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <DrawerItemButton>哈哈</DrawerItemButton>
          </a>
        </NextLink>
        <DrawerItemDivider />
      </HeaderMobileNav>
    </Header>
  )
}

export const rightphotou = () => {
  return (
    <Header>
      <HeaderLogo>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Box as={IoMdHome} size={6} />
          </a>
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
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Box as={IoMdHome} size={6} />
          </a>
        </NextLink>
      </HeaderLogo>
      <HeaderRight>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Box as={IoMdHome} size={6} />
          </a>
        </NextLink>
      </HeaderRight>
    </Header>
  )
}

export const leftIcons = () => {
  return (
    <Header>
      <HeaderLogo>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Box as={IoMdHome} size={6} />
          </a>
        </NextLink>
      </HeaderLogo>
      <HeaderLeft>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Box as={IoMdHome} size={6} />
          </a>
        </NextLink>
      </HeaderLeft>
    </Header>
  )
}

export const centerIcons = () => {
  return (
    <Header>
      <HeaderLogo>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Box as={IoMdHome} size={6} />
          </a>
        </NextLink>
      </HeaderLogo>
      <HeaderCenter>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Box as={IoMdHome} size={6} />
          </a>
        </NextLink>
      </HeaderCenter>
    </Header>
  )
}

export const loginPaper = () => {
  return (
    <Header>
      <HeaderLogo>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
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
          </a>
        </NextLink>
      </HeaderLogo>
      <HeaderRight>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Button bg='transparent' border='1px' px={2} h={{ base: '35px', sm: '38px' }}>
              登入
            </Button>
          </a>
        </NextLink>
      </HeaderRight>
    </Header>
  )
}

export const AfterLoginPaper = () => {
  return (
    <Header>
      <HeaderLogo>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
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
          </a>
        </NextLink>
      </HeaderLogo>
      <HeaderRight>
        <Menu placement='bottom-end'>
          <MenuButton as='div'>
            <Avatar name='vivi' src={MyImage} size='sm' cursor='pointer' />
          </MenuButton>
          <MenuList w='280px'>
            <NextLink href='/' passHref>
              <MenuItem as='a' onClick={action('button-click')}>
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
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
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
          </a>
        </NextLink>
      </HeaderLogo>
      <HeaderCenter>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
          </a>
        </NextLink>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
          </a>
        </NextLink>
      </HeaderCenter>
      <HeaderRight>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <HeaderButton icon={MdAccessibility} title='首页' href='https://www.baidu.com' />
          </a>
        </NextLink>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <HeaderButton icon={MdAccessibility} title='关于' href='https://www.baidu.com' />
          </a>
        </NextLink>
        <Menu placement='bottom-end'>
          <MenuButton as='div'>
            <Avatar name='vivi' src={MyImage} size='sm' cursor='pointer' />
          </MenuButton>
          <MenuList w='280px'>
            <NextLink href='/school' passHref>
              <MenuItem as='a' onClick={action('button-click')}>
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
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <DrawerItemButton>首页</DrawerItemButton>
          </a>
        </NextLink>
        <DrawerItemDivider />
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <DrawerItemButton>关于</DrawerItemButton>
          </a>
        </NextLink>
        <DrawerItemDivider />
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <DrawerItemButton>哈哈</DrawerItemButton>
          </a>
        </NextLink>
        <DrawerItemDivider />
      </HeaderMobileNav>
    </Header>
  )
}
