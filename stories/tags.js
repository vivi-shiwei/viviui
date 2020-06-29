import React from 'react'
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
  Icon,
  Image,
  Tag,
  TagLabel,
  AspectRatioBox
} from '@chakra-ui/core'
import Tags, { PostCard } from '../src/components/tags'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'

import MyImage from '../static/QQ20200518181405.jpg'
export default {
  title: 'Tag'
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
  )
}
