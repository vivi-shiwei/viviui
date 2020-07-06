import React from 'react'
import {
  Box,
  Button
} from '@chakra-ui/core'
import ClsPage from '../src/components/clsPage'
import { PostCard } from '../src/components/post'

import MyImage from '../static/QQ20200518181405.jpg'
import MyImage6 from '../static/timg.jpg'

export default {
  title: 'ClsPage'
}
export const Cls = () => {
  return (
    <ClsPage
      title='Form 1A'
      clsImage={
        <Box as='section' maxW='94%' mt='20px' mb='20px' d='inline-block'>
          <Box as='div' float='none' position='relative' className='add-users-btn'>
            <Box
              as='a'
              border='1px solid #718096'
              p={{ base: '5px 16px', md: '7px 20px' }}
              borderRadius='30px'
              fontSize='13px'
              d='block'
              cursor='pointer'
              position='relative'
              zIndex='2'
              color='#718096'
              background='#ebf8ff'
            >
              <span>編輯成員</span>
            </Box>
          </Box>
        </Box>
      }
      button={
        <Button
          variant='outline'
          variantColor='blue'
        >
          九大智能分析
        </Button>
      }
    >
      <PostCard
        mb={5}
        creatorName='vivi'
        createTime='2010-9'
        title='貼文'
      />
    </ClsPage>
  )
}
export const Notitle = () => {
  return (
    <ClsPage
      clsImage={
        <Box as='section' maxW='94%' mt='20px' mb='20px' d='inline-block'>
          <Box as='div' float='none' position='relative' className='add-users-btn'>
            <Box
              as='a'
              border='1px solid #718096'
              p={{ base: '5px 16px', md: '7px 20px' }}
              borderRadius='30px'
              fontSize='13px'
              d='block'
              cursor='pointer'
              position='relative'
              zIndex='2'
              color='#718096'
              background='#ebf8ff'
            >
              <span>編輯成員</span>
            </Box>
          </Box>
        </Box>
      }
      button={
        <Button
          variant='outline'
          variantColor='blue'
        >
          九大智能分析
        </Button>
      }
    >
      <PostCard
        mb={5}
        creatorName='vivi'
        createTime='2010-9'
        title='貼文'
      />
    </ClsPage>
  )
}
export const Nobutton = () => {
  return (
    <ClsPage
      clsImage={
        <Box as='section' maxW='94%' mt='20px' d='inline-block'>
          <Box as='div' float='none' position='relative' className='add-users-btn'>
            <Box
              as='a'
              border='1px solid #718096'
              p={{ base: '5px 16px', md: '7px 20px' }}
              borderRadius='30px'
              fontSize='13px'
              d='block'
              cursor='pointer'
              position='relative'
              zIndex='2'
              color='#718096'
              background='#ebf8ff'
            >
              <span>編輯成員</span>
            </Box>
          </Box>
        </Box>
      }
    >
      <PostCard
        mb={5}
        creatorName='vivi'
        createTime='2010-9'
        title='貼文'
      />
    </ClsPage>
  )
}
export const NoTitle = () => {
  return (
    <ClsPage
      clsImage={
        <Box as='section' maxW='94%' mt='20px' d='inline-block'>
          <Box as='div' float='none' position='relative' className='add-users-btn'>
            <Box
              as='a'
              border='1px solid #718096'
              p={{ base: '5px 16px', md: '7px 20px' }}
              borderRadius='30px'
              fontSize='13px'
              d='block'
              cursor='pointer'
              position='relative'
              zIndex='2'
              color='#718096'
              background='#ebf8ff'
            >
              <span>編輯成員</span>
            </Box>
          </Box>
        </Box>
      }
    >
      <PostCard
        mb={5}
        creatorName='vivi'
        createTime='2010-9'
      />
    </ClsPage>
  )
}

export const NoPostCard = () => {
  return (
    <ClsPage
      clsImage={
        <Box as='section' maxW='94%' mt='20px' d='inline-block'>
          <Box as='div' float='none' position='relative' className='add-users-btn'>
            <Box
              as='a'
              border='1px solid #718096'
              p={{ base: '5px 16px', md: '7px 20px' }}
              borderRadius='30px'
              fontSize='13px'
              d='block'
              cursor='pointer'
              position='relative'
              zIndex='2'
              color='#718096'
              background='#ebf8ff'
            >
              <span>編輯成員</span>
            </Box>
          </Box>
        </Box>
      }
    />
  )
}
export const button = () => {
  return (
    <ClsPage
      clsImage='kfgpojg'
    >
      <PostCard
        mb={5}
        creatorName='vivi'
        createTime='2010-9'
      />
    </ClsPage>
  )
}
export const PostCards = () => {
  return (
    <ClsPage title='Form 1A'>
      <PostCard
        mb={5}
        profilePhoto={MyImage}
        creatorName='vivi'
        createTime='2010-9'
        Posttitle='感恩節'
        content='今天天氣不錯'
      />
      <PostCard
        mb={5}
        profilePhoto={MyImage}
        creatorName='vivi'
        createTime='2010-9'
        content='今天天氣真好'
      />
      <PostCard
        mb={5}
        profilePhoto={MyImage}
        creatorName='vivi'
        createTime='2010-9'
        Posttitle='聖誕節'
      />
      <PostCard
        mb={5}
        profilePhoto={MyImage}
        creatorName='vivi'
        createTime='2010-9'
        content='今天天氣真好'
      />
      <PostCard
        mb={5}
        profilePhoto={MyImage}
        creatorName='vivi'
        createTime='2010-9'
      />
    </ClsPage>
  )
}
