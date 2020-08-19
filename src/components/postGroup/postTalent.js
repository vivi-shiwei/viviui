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
        <TagLabel>调皮</TagLabel>
        <TagLabel>捣蛋</TagLabel>
        <TagLabel>爱说话</TagLabel>
      </Tag>
    </Box>
  )
}

export default PostTalent
