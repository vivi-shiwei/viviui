import React from 'react'
import { action } from '@storybook/addon-actions'
import {
  Box,
  Heading,
  Button,
  Stack,
  MenuButton,
  Avatar,
  Menu,
  MenuList,
  MenuItem,
  Link
} from '@chakra-ui/core'
import { AiOutlineLogout } from 'react-icons/ai'
import { IoMdHome } from 'react-icons/io'
import NextLink from 'next/link'
import { MdDashboard, MdAccessibility, MdPhoto, MdShowChart } from 'react-icons/md'

import DrawerItemDivider from '../src/components/header/drawerItemDivider'
import DrawerItemButton from '../src/components/header/drawerItemButton'
import HeaderLogo from '../src/components/header/headerLogo'
import HeaderCenter from '../src/components/header/headerCenter'
import HeaderMobileNav from '../src/components/header/headerMobileNav'
import HeaderRight from '../src/components/header/headerRight'
import HeaderButton from '../src/components/header/headerButton'
import Footer from '../src/components/footer'
import Hero from '../src/components/hero'
import Header from '../src/components/header'
import FeatureGrid from '../src/components/featureGrid'
import Feature from '../src/components/featureGrid/feature'

import MyImage from '../static/QQ20200518181405.jpg'

export default {
  title: 'School(vivi)'
}

export const school = () => {
  return (
    <>
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
      <Hero
        title='我的學校'
        subtitle='SCHOOL 是一個簡單的、可連結很多模組的、線上的學校系統。可透過 SCHOOL 進行日常校園管理，了解學生學習生活，促進發掘學生閃光點等等。專為澳門中小幼學校而設。'
        leftButton={
          <Box mt='6' d='flex' flexWrap='wrap' justifyContent='center'>
            <NextLink href='/test' passHref>
              <a onClick={action('button-click')}>
                <Button size='lg' as='a' variantColor='blue' w={{ base: '100%', sm: 'auto' }}>
                  登入到我的學校
                </Button>
              </a>
            </NextLink>
          </Box>
        }
      />

      <FeatureGrid>
        <Feature
          title='學生成長檔案'
          subtitle='SCHOOL 替每個學生都建立一個成長檔案，老師能記錄學生的學習生活，如學生的擅好，長處等。
                        使老師更能發現學生的閃光點。同學也能充分了解校園生活所帶給他的歷程。'
          icon={MdAccessibility}
        />
        <Feature
          title='學生相冊'
          subtitle='每個小朋友成長的瞬間都值得紀念。SCHOOL 提供的學生相冊除了能作為記錄學生活動相片外，也能和學生成長檔案、學生活動事件相連結。讓系統能客觀地分析學生的智能發展方向。'
          icon={MdPhoto}
        />
        <Feature
          title='與基力掛勾的學生評估表'
          subtitle='每個小朋友成長的瞬間都值得紀念。SCHOOL 提供的學生相冊除了能作為記錄學生活動相片外，也能和學生成長檔案、學生活動事件相連結。讓系統能客觀地分析學生的智能發展方向。'
          icon={MdShowChart}
        />
      </FeatureGrid>
    </>
  )
}

export const Homeschool = () => {
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
  const Disclosure = (
    <>
      <p>1</p>
      <p>2</p>
      <p>3</p>
    </>
  )
  const Right = (
    <Stack align='center' isInline spacing='2'>
      <Menu placement='bottom-end'>
        <MenuButton as='div'>
          <Avatar
            src={MyImage}
            size='sm'
            cursor='pointer'
          />
        </MenuButton>
        <MenuList w='280px'>
          <NextLink href='/' passHref>
            <MenuItem as='a'>
              <Box as={MdDashboard} mr='4px' />
              <span>我的學校</span>
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
    <>
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
            <MenuButton as='div' onClick={action('button-click')}>
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
                <MenuItem onClick={action('button-click')}>
                  <Box as={AiOutlineLogout} mr='4px' />
                  <span>登出</span>
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </HeaderRight>
        <HeaderMobileNav>
          <DrawerItemButton onClick={action('button-click')}>首页</DrawerItemButton>
          <DrawerItemDivider />
          <DrawerItemButton onClick={action('button-click')}>关于</DrawerItemButton>
          <DrawerItemDivider />
          <DrawerItemButton onClick={action('button-click')}>哈哈</DrawerItemButton>
          <DrawerItemDivider />
        </HeaderMobileNav>
      </Header>

      <Hero
        title={
          <>
            我的學校
            <Box as='span' color='blue.500'>
              {' '}
                SCHOOL
            </Box>
          </>
        }
        subtitle='SCHOOL 是一個簡單的、可連結很多模組的、線上的學校系統。可透過 SCHOOL 進行日常校園管理，了解學生學習生活，促進發掘學生閃光點等等。專為澳門中小幼學校而設。'
        leftButton={
          <Box mt='6' d='flex' flexWrap='wrap' justifyContent='center'>
            <NextLink
              href='/'
              passHref
            >
              <Button size='lg' as='a' onClick={action('button-click')} variantColor='blue' w={{ base: '100%', sm: 'auto' }}>
                登入到我的學校
              </Button>
            </NextLink>
          </Box>
        }
      />

      <FeatureGrid>
        <Feature
          title='學生成長檔案'
          subtitle='SCHOOL 替每個學生都建立一個成長檔案，老師能記錄學生的學習生活，如學生的擅好，長處等。
                        使老師更能發現學生的閃光點。同學也能充分了解校園生活所帶給他的歷程。'
          icon={MdAccessibility}
        />
        <Feature
          title='學生相冊'
          subtitle='每個小朋友成長的瞬間都值得紀念。SCHOOL 提供的學生相冊除了能作為記錄學生活動相片外，也能和學生成長檔案、學生活動事件相連結。讓系統能客觀地分析學生的智能發展方向。'
          icon={MdPhoto}
        />
        <Feature
          title='與基力掛勾的學生評估表'
          subtitle='每個小朋友成長的瞬間都值得紀念。SCHOOL 提供的學生相冊除了能作為記錄學生活動相片外，也能和學生成長檔案、學生活動事件相連結。讓系統能客觀地分析學生的智能發展方向。'
          icon={MdShowChart}
        />
      </FeatureGrid>
      <Footer
        title='Macau School 學不停'
        context='Macau School 的宗旨為在生活中不停學習。提供線上學習平台，線上學校管理系統。通過視頻課程，在您的瀏覽器中舒適地教授課程，為澳門學生而設。'
        sign='© 2020 Macau School. Crafted lovingly in Macau.'
      />

      <NextLink href='/test'>
        <a onClick={action('button-click')}>
          <Button>返回</Button>
        </a>
      </NextLink>
    </>
  )
}
