import React from 'react'
import {
  Box,
  Tag,
  TagLabel,
  Icon
} from '@chakra-ui/core'

const PostTalent = ({ children, ...props }) => {
  return (
    <>
      {children.trim() && (
        <Box mt={3}>
          <Tag rounded='full' variant='outline' variantColor='green' style={{ whiteSpace: 'nowrap' }} {...props}>
            <Icon mr='1' name='star' />
            <TagLabel>{children}</TagLabel>
          </Tag>
        </Box>
      )}
    </>
  )
}

export default PostTalent
