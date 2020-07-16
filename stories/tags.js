import React from 'react'
import {
  Box,
  Button,
  MenuButton,
  Avatar,
  Menu,
  MenuList,
  MenuItem,
  Text,
  Icon,
  Image,
  AspectRatioBox,
  Flex
} from '@chakra-ui/core'
import Tags, { PostCard } from '../src/components/post'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'

import MyImage from '../static/QQ20200518181405.jpg'
export default {
  title: 'Tag'
}
export const noProfilePhoto = () => {
  return (
    <Tags title='聖若瑟教區中學第六校'>
      <PostCard
        mb={5}
        creatorName='vivi'
        createTime='2010-9'
        Posttitle='schoolName 下沒有按鈕的時候 和頭像圖片不給'
      />
    </Tags>
  )
}
export const noTitle = () => {
  return (
    <Tags>
      <PostCard
        mb={5}
        creatorName='vivi'
        createTime='2010-9'
        Posttitle='沒有貼文板塊以上的字'
      />
    </Tags>
  )
}
export const noPostCard = () => {
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
  return (
    <Tags title='聖若瑟教區中學第六校' subtitle={subtitle}>
      <Box d='flex' justifyContent='center'>沒有貼文
      </Box>
    </Tags>
  )
}
export const noPostCardandButton = () => {
  return (
    <Tags title='聖若瑟教區中學第六校' subtitle='可以定義如何東西' />
  )
}

export const iseditModel = () => {
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
    <Tags title='聖若瑟教區中學第六校' subtitle={subtitle}>
      <PostCard
        mb={5}
        creatorName='vivi'
        editModel={editModel}
        profilePhoto={MyImage}
        createTime='2010-9'
        Posttitle='編輯按鈕需自己添加，位置在貼文的左上角'
      />
    </Tags>
  )
}

export const noPostCardTitle = () => {
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
  return (
    <Tags title='沒有給標題顯示的樣子' subtitle={subtitle}>
      <PostCard
        profilePhoto={MyImage}
        mb={5}
        creatorName='vivi'
        createTime='2010-9'
      />
    </Tags>
  )
}
export const talentName = () => {
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
  return (
    <Tags title='聖若瑟教區中學第六校' subtitle={subtitle}>
      <PostCard
        profilePhoto={MyImage}
        mb={5}
        creatorName='vivi'
        createTime='2010-9'
        talentName='有責任心'
      />
    </Tags>
  )
}
export const content = () => {
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
  return (
    <Tags title='聖若瑟教區中學第六校' subtitle={subtitle}>
      <PostCard
        profilePhoto={MyImage}
        mb={5}
        creatorName='vivi'
        createTime='2010-9'
        talentName='有責任心'
        content='正文内容'
      />
    </Tags>
  )
}
export const imag = () => {
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
  return (
    <Tags title='聖若瑟教區中學第六校' subtitle={subtitle}>
      <PostCard
        profilePhoto={MyImage}
        mb={5}
        creatorName='vivi'
        createTime='2010-9'
        talentName='有責任心'
        content='有圖片的正文内容'
        postPhotos={
          <AspectRatioBox maxW='100%' ratio={4 / 4}>
            <Image src={MyImage} alt='naruto' objectFit='cover' />
          </AspectRatioBox>
        }
      />
    </Tags>
  )
}

export const tagNames = () => {
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
  return (
    <Tags title='聖若瑟教區中學第六校' subtitle={subtitle}>
      <PostCard
        profilePhoto={MyImage}
        mb={5}
        creatorName='vivi'
        createTime='2010-9'
        talentName='有責任心'
        content='有圖片的正文内容'
        postPhotos={
          <AspectRatioBox maxW='100%' ratio={4 / 4}>
            <Image src={MyImage} alt='naruto' objectFit='cover' />
          </AspectRatioBox>
        }
        tagNames={<Text cursor='pointer' as='ins' color='Blue' style={{ whiteSpace: 'nowrap' }}>tag到的人</Text>}
      />
    </Tags>
  )
}
export const PostCardchlidrens = () => {
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
  return (
    <Tags title='聖若瑟教區中學第六校' subtitle={subtitle}>
      <PostCard
        profilePhoto={MyImage}
        mb={5}
        creatorName='vivi'
        createTime='2010-9'
        talentName='有責任心'
        content='有圖片的正文内容'
        postPhotos={
          <AspectRatioBox maxW='100%' ratio={4 / 4}>
            <Image src={MyImage} alt='naruto' objectFit='cover' />
          </AspectRatioBox>
        }
        tagNames={<Text cursor='pointer' as='ins' color='Blue' style={{ whiteSpace: 'nowrap' }}>tag到的人</Text>}
      >
        <Flex>
          <Box as={FcLikePlaceholder} fontSize='30px' />
          <Box as={FcLike} fontSize='30px' />
        </Flex>
      </PostCard>
    </Tags>
  )
}

export const Tagpost = () => {
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
    <Tags title='聖若瑟教區中學第六校' subtitle={subtitle}>
      <PostCard
        mb={5}
        editModel={editModel}
        profilePhoto={MyImage}
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
        profilePhoto={MyImage}
        creatorName='vivi'
        createTime='2010-9'
        tagNames={<Text cursor='pointer' as='ins' color='Blue' style={{ whiteSpace: 'nowrap' }}>vivi</Text>}
      />
      <PostCard
        mb={5}
        profilePhoto={MyImage}
        creatorName='vivi'
        createTime='2010-9'
      />
    </Tags>
  )
}
