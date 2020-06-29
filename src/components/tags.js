import React from 'react'
import {
  Box,
  Heading,
  Text,
  Divider,
  Flex,
  Image,
  Stack,
  Tag,
  Avatar,
  TagLabel,
  Badge,
  Tooltip
} from '@chakra-ui/core'
import NextLink from 'next/link'
import { Container } from './container'

const PostContent = ({ content }) => {
  return content.split('\n').map((line, i) => {
    return (
      <Text key={i} fontSize={{ base: 'xl', sm: '2xl' }}>
        {line}
      </Text>
    )
  })
}

export const PostCard = ({ editModel, profilePhoto, creatorName, createTime, title, talentName, postPhotos, tagNames, content, children, ...props }) => {
  return (
    <Box rounded={{ base: 0, md: 6 }} mx='auto' border='1px solid #b7b7b7' bg='White' width={{ base: '100%', md: '655px' }} p={4} {...props}>
      <Box as='header' position='relative'>
        <Box position='absolute' right='0px' top='0px'>
          {/* 編輯與刪除的按鈕 */}
          {editModel}
        </Box>
        {(!!profilePhoto || !!creatorName || !!createTime) && (
          <Box d='flex' justifyContent='space-between'>
            <Stack isInline>
              {/* 發文者的頭像 姓名 發文時間 */}
              {!!profilePhoto && (
                <Box
                  as='div'
                  w='50px' h='50px'
                  rounded='50%'
                  d='flex'
                  alignItems='center'
                  justifyContent='center'
                  overflow='hidden'
                >
                  {profilePhoto}
                </Box>
              )}
              {(!!creatorName || !!createTime) && (
                <Box as='div' ml={2} fontSize={20} fontWeight='bold' textAlign='left'>
                  {!!creatorName && <Text fontSize='lg'>{creatorName}</Text>}
                  {!!createTime && (
                    <Text fontSize='md' color='gray.400'>
                      {createTime}
                    </Text>
                  )}
                </Box>

              )}
            </Stack>
          </Box>
        )}
        <Box mx={2} mt={3}>
          {/* Talent Name */}
          {!!talentName && (
            <Box>
              <Tag rounded='full' variant='outline' variantColor='blue' style={{ whiteSpace: 'nowrap' }}>
                <TagLabel fontSize={{ base: 'sm', sm: 'lg' }}>{talentName}</TagLabel>
              </Tag>
            </Box>
          )}
          <Box mt={2}>
            <Text fontWeight='bold' textAlign='left' minH={{ base: '30px', sm: '50px' }} wordBreak='break-word' fontSize={{ base: '2xl', sm: '3xl' }}>
              {(title && title !== ' ') ? title : '無標題'}
            </Text>
          </Box>
        </Box>
      </Box>

      {/* 貼文的內文與照片 */}
      <Box as='article'>
        {/* 內文的文字 */}
        {!!content && (
          <Box as='div' textAlign='left' wordBreak='break-word' p={{ base: 3, sm: 5 }}>
            <PostContent content={content} />
          </Box>
        )}
        {/* 學生的tag */}
        <Text cursor='pointer' as='ins' color='Blue' style={{ whiteSpace: 'nowrap' }}>
          {tagNames}
        </Text>

        {/* 照片列表 */}
        <Box mt={2}>
          {postPhotos}
        </Box>
      </Box>
      {children}
    </Box>
  )
}

const tags = ({ title, subtitle, children, ...props }) => {
  return (
    <>
      <Box {...props}>
        {!!title && (
          <Container py={4}>
            <Flex justifyContent='center'>
              <Heading fontSize='1.6rem'>
                {title}
              </Heading>
            </Flex>
          </Container>
        )}
        {!!subtitle && (

          <Container mb={10}>
            <Box d='flex' justifyContent='center'>
              {subtitle}
            </Box>
          </Container>

        )}
        {children}
      </Box>
    </>
  )
}
export default tags
