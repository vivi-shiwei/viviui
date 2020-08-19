import React from 'react'
import {
  Box,
  Tag,
  TagLabel,
  Icon
} from '@chakra-ui/core'

const PostTalent = ({ children, ...props }) => {
  return (
    <Box mt={3}>
      <Tag rounded='full' variant='outline' variantColor='green' style={{ whiteSpace: 'nowrap' }}>
        <Icon mr='1' name='star' />
        <TagLabel>才能</TagLabel>
      </Tag>
    </Box>
  )
}

export default PostTalent
