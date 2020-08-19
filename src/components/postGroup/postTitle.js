import React from 'react'
import {
  Box,
  Text
} from '@chakra-ui/core'

const PostTitle = ({ children, ...props }) => {
  return (
    <Box mt={3}>
      <Text fontWeight='bold' textAlign='left' minH='50px' wordBreak='break-word' fontSize='3xl'>
        標題
      </Text>
    </Box>
  )
}

export default PostTitle
