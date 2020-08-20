import React from 'react'
import {
  Box,
  Image,
  Stack,
  Text,
  Link
} from '@chakra-ui/core'
import NextLink from 'next/link'

const PostCreatorHeader = ({ link, name, photo, time, children, ...props }) => {
  return (
    <Stack isInline>
      {/* 發文者的頭像 姓名 發文時間 */}

      <Box
        as='div'
        w='50px'
        h='50px'
        rounded='50%'
        d='flex'
        alignItems='center'
        justifyContent='center'
        overflow='hidden'
      >
        <NextLink
          href={link}
          passHref
        >
          <Link
            className='photo'
            width='full'
            height='full'
          >
            <Image
              src={photo}
              fallbackSrc='https://f10.baidu.com/it/u=1911995130,2805437140&fm=76'// 默认头像
            />
          </Link>
        </NextLink>
        <style>
          {`
          .photo img{
            max-width: 100%;
            height: 100%;
            
          }
          `}
        </style>
      </Box>

      <Box as='div' ml={2} fontSize={20} fontWeight='bold' textAlign='left'>
        <NextLink
          href={link}
          as={link}
          passHref
        >
          <Link fontSize='lg'>
            {name}
          </Link>
        </NextLink>
        <Text fontSize='md' color='gray.400'>
          {time}
        </Text>
      </Box>
    </Stack>
  )
}

export default PostCreatorHeader
