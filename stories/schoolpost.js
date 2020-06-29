import React from 'react'
import { GridFooter, OddFeature } from '../src/components/footer'
import Header from '../src/components/header'
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
  Icon,
  Image,
  Tag,
  TagLabel,
  AspectRatioBox,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  useColorMode
} from '@chakra-ui/core'
import Tags, { PostCard } from '../src/components/tags'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import { IoMdPerson, IoMdHome } from 'react-icons/io'
import NextLink from 'next/link'
import { MdDashboard, MdAccessibility, MdPhoto, MdShowChart } from 'react-icons/md'
import { AiOutlineLogout } from 'react-icons/ai'
import { FiAlignJustify } from 'react-icons/fi'

import MyImage from '../static/QQ20200518181405.jpg'
export default {
  title: 'Schoolpost'
}

export const Schoolpost = () => {
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
      <Button variantColor='none' onClick={onOpen} display={{ sm: 'block', md: 'none' }} size='xs'>
        <Box fontSize={{ base: '22px', sm: '28px' }} color={colorMode === 'light' ? 'black' : 'white'} as={FiAlignJustify} />
      </Button>
      <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>選項</DrawerHeader>
          <DrawerBody>
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
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
  const subtitle = (
    <>
      <Button
        variantColor='blue'
        mx={2}
      >
        建立新貼文
      </Button>
      <Button
        variantColor='green'
        mx={2}
      >
        記錄優秀學生
      </Button>
    </>
  )
  const editModel = (
    <Menu>
      <MenuButton as={Icon} size='30px' name='chevron-down' fontSize='20px' />
      <MenuList>
        <MenuItem minH='20px'>
          <Text>編輯</Text>
        </MenuItem>
        <MenuItem minH='20px' onClick={() => alert('確認刪除')}>
          <Text>刪除</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  )
  return (
    <Box>
      <Header logo={Logo} right={Right} Disclosure={Disclosure} noColormode>
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
      <Tags title='聖若瑟教區中學第六校' subtitle={subtitle} mt={16}>
        <PostCard
          mb={5}
          editModel={editModel}
          profilePhoto={
            <Avatar size='md' name='Ryan Florence' src={MyImage} cursor='pointer' />
          }
          creatorName='vivi'
          createTime='2010-9'
          talentName='有責任心'
          content='今天是聖若瑟開學第一天，歡迎學生們回歸學校，下面有請校長上臺講話'
          // tagNames={
          //   <Tag rounded='full' variant='solid' variantColor='cyan' fontSize={{ base: '13px', md: '16px' }} style={{ whiteSpace: 'nowrap' }}>
          //     聖若瑟第六校
          //   </Tag>
          // }
          postPhotos={
            <AspectRatioBox maxW='100%' ratio={4 / 4}>
              <Image src={MyImage} alt='naruto' objectFit='cover' />
            </AspectRatioBox>
          }
        />
        <PostCard
          mb={5}
          profilePhoto={
            <Avatar size='md' name='Ryan Florence' src={MyImage} cursor='pointer' />
          }
          creatorName='vivi'
          createTime='2010-9'
          tagNames='vivi'
        />
        <PostCard
          mb={5}
          profilePhoto={
            <Avatar size='md' name='Ryan Florence' src={MyImage} cursor='pointer' />
          }
          creatorName='vivi'
          createTime='2010-9'
        />
      </Tags>
    </Box>
  )
}
