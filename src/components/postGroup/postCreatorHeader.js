import React from 'react'
import {
  Box,
  Image,
  Stack,
  Text,
  Link
} from '@chakra-ui/core'
import NextLink from 'next/link'

const PostCreatorHeader = ({ creator, children, ...props }) => {
  return (
    <Stack isInline>
      {/* 發文者的頭像 姓名 發文時間 */}
      <Box
        as='div'
        w='50px' h='50px'
        rounded='50%'
        d='flex'
        alignItems='center'
        justifyContent='center'
        overflow='hidden'
      >
        <NextLink
          href='#'
          as='a'
          passHref
        >
          <Link>
            <Image
              src='https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg'
              fallbackSrc='#'
            />
          </Link>
        </NextLink>
      </Box>
      <Box as='div' ml={2} fontSize={20} fontWeight='bold' textAlign='left'>
        <NextLink
          href='#'
          as='a'
          passHref
        >
          <Link fontSize='lg'>
            pengchihui1
          </Link>
        </NextLink>
        <Text fontSize='md' color='gray.400'>
          2020-08-19 14:32
        </Text>
      </Box>
    </Stack>
  )
}

export default PostCreatorHeader
