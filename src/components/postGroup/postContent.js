import React from 'react'
import {
  Box,
  Text
} from '@chakra-ui/core'

const PostContent = ({ children, ...props }) => {
  return (
    <>
      {children.trim() && (
        <Text fontSize='2xl' textAlign='left' wordBreak='break-word' {...props}>
          {children}
        </Text>
      )}
    </>

  )
}

export default PostContent
