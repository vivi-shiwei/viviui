import React from 'react'
import {
  Box,
  Stack,
  Text
} from '@chakra-ui/core'

const PostCreatorHeader = ({ profilePhoto, creatorName, creatorTime, ...props }) => {
  return (
    <Stack isInline {...props}>
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
          {creatorTime}
        </Text>
      </Box>
    </Stack>
  )
}

export default PostCreatorHeader
