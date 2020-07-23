import React, { memo } from 'react'
import {
  Box
} from '@chakra-ui/core'

const PostContent = memo(({ children, ...props }) => {
  return (
    <Box as='div' textAlign='left' wordBreak='break-word'>
      {children}
    </Box>
  )
})

export default PostContent
