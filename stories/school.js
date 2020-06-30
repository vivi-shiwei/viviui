import React from 'react'
import Hero from '../src/components/hero'
import Header from '../src/components/header'
import { GridFooter, OddFeature } from '../src/components/footer'
import {
  Box,
  Heading,
  Button,
  ButtonGroup,
  Stack,
  MenuButton,
  Avatar,
  Menu,
  MenuList,
  MenuItem,
  Link,
  Text,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  useColorMode
} from '@chakra-ui/core'
import { AiOutlineLogout } from 'react-icons/ai'
import { IoMdPerson, IoMdHome } from 'react-icons/io'
import NextLink from 'next/link'
import { MdDashboard, MdAccessibility, MdPhoto, MdShowChart } from 'react-icons/md'
import { FiAlignJustify } from 'react-icons/fi'

import MyImage from '../static/QQ20200518181405.jpg'
export default {
  title: 'School'
}

export const school = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
  const Logo = (
    <Heading as='h1' size='lg' letterSpacing='-.1rem'>
      <Box as='span' d={{ base: 'none', sm: 'inline' }}>
        SCHOOL
      </Box>
      <Box as='span' d={{ base: 'inline', sm: 'none' }}>
        SCH
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
            size='md'
            cursor='pointer'
            display={{ base: 'none', sm: 'block' }}
            w={{ base: '40px', md: '50px' }}
            h={{ base: '40px', md: '50px' }}
          />
          <Text fontSize='sm' display={{ base: 'block', sm: 'none' }} color='teal.500' mr='3px'>vivi</Text>
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
    <>
      <Header logo={Logo} right={Right} Disclosure={Disclosure}>
        <ButtonGroup>
          <NextLink passHref href='#'>
            <Button
              ref='#'
              as='a'
              flexDirection={{ base: 'column', md: 'row' }}
              align='center'
              variant='link'
              fontSize={{ base: 'xs', md: 'lg' }}
              px={{ base: 0, sm: 4 }}
            >
              <Box m={0} color='currentColor' ml={{ base: 0, md: -1 }} mr={{ base: 0, md: 1 }} display={{ base: 'none', sm: 'block' }}>
                <IoMdPerson size='1.5em' />
              </Box>
              首頁
            </Button>
          </NextLink>
          <NextLink passHref href='#'>
            <Button
              ref='#'
              as='a'
              flexDirection={{ base: 'column', md: 'row' }}
              align='center'
              variant='link'
              fontSize={{ base: 'xs', md: 'lg' }}
              px={{ base: 0, sm: 4 }}
            >
              <Box m={0} color='currentColor' ml={{ base: 0, md: -1 }} mr={{ base: 0, md: 1 }} display={{ base: 'none', sm: 'block' }}>
                <MdDashboard size='1.5em' />
              </Box>
              學校專頁
            </Button>
          </NextLink>
        </ButtonGroup>
      </Header>
      <Hero
        title='我的學校'
        subtitle='SCHOOL 是一個簡單的、可連結很多模組的、線上的學校系統。可透過 SCHOOL 進行日常校園管理，了解學生學習生活，促進發掘學生閃光點等等。專為澳門中小幼學校而設。'
        leftButton={
          <Box mt='6' d='flex' flexWrap='wrap' justifyContent='center'>
            <NextLink
              href='/'
              passHref
            >
              <Button size='lg' as='a' variantColor='blue' w={{ base: '100%', sm: 'auto' }}>
                登入到我的學校
              </Button>
            </NextLink>
          </Box>
        }
      />

      <GridFooter>
        <OddFeature
          title='學生成長檔案'
          subtitle='SCHOOL 替每個學生都建立一個成長檔案，老師能記錄學生的學習生活，如學生的擅好，長處等。
                        使老師更能發現學生的閃光點。同學也能充分了解校園生活所帶給他的歷程。'
          icon={MdAccessibility}
        />
        <OddFeature
          title='學生相冊'
          subtitle='每個小朋友成長的瞬間都值得紀念。SCHOOL 提供的學生相冊除了能作為記錄學生活動相片外，也能和學生成長檔案、學生活動事件相連結。讓系統能客觀地分析學生的智能發展方向。'
          icon={MdPhoto}
        />
        <OddFeature
          title='與基力掛勾的學生評估表'
          subtitle='每個小朋友成長的瞬間都值得紀念。SCHOOL 提供的學生相冊除了能作為記錄學生活動相片外，也能和學生成長檔案、學生活動事件相連結。讓系統能客觀地分析學生的智能發展方向。'
          icon={MdShowChart}
        />
      </GridFooter>
    </>
  )
}
