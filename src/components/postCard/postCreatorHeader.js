import {
  Box,
  Image,
  Stack,
  Text,
  Link
} from '@chakra-ui/core'
import NextLink from 'next/link'
import format from 'date-fns/format'
import { useRouter } from 'next/router'

import { getImgixUrl } from 'lib/imgix'

const PostCreatorHeader = ({ profilePhoto, creatorName, post }) => {
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
        {profilePhoto}
      </Box>
      <Box as='div' ml={2} fontSize={20} fontWeight='bold' textAlign='left'>
        {creatorName}
        <Text fontSize='md' color='gray.400'>
          {format(new Date(post.createdAt), 'yyyy-MM-dd HH:mm')}
        </Text>
      </Box>
    </Stack>
  )
}

export default PostCreatorHeader
