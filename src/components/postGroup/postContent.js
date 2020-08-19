import React from 'react'
import {
  Box,
  Text
} from '@chakra-ui/core'

const PostContent = ({ content, children, ...props }) => {
  return (
    <Box as='div' textAlign='left' wordBreak='break-word'>
      {content.split('\n').map((line, i) => {
        return (
          <Text key={i} fontSize='2xl'>
            {line}
          </Text>
        )
      })}
    </Box>
  )
}

export default PostContent
