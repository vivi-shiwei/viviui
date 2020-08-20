import React from 'react'
import {
  Text
} from '@chakra-ui/core'

const PostContent = ({ children, ...props }) => {
  return (
    <>
      {children.trim() && (
        <Text fontSize={{ base: '16px', sm: '16px', md: '18px' }} textAlign='left' wordBreak='break-word' {...props}>
          {children}
        </Text>
      )}
    </>

  )
}

export default PostContent
