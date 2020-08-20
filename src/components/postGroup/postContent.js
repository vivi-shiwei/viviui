import React from 'react'
import {
  Box,
  Text
} from '@chakra-ui/core'

const PostContent = ({ children, ...props }) => {
  return (
    <>
      {children.trim() && (
        <Box as='div' textAlign='left' wordBreak='break-word' {...props}>
          {children.split('\n').map((line, i) => {
            return (
              <Text key={i} fontSize='2xl'>
                {line}
              </Text>
            )
          })}
        </Box>
      )}
    </>

  )
}

export default PostContent
