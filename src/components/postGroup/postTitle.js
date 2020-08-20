import React from 'react'
import {
  Box,
  Text
} from '@chakra-ui/core'

const PostTitle = ({ children, ...props }) => {
  return (
    <Box mt={3}>
      <Text fontWeight='bold' textAlign='left' minH='50px' wordBreak='break-word' fontSize={{ base: '24px', sm: '24px', md: '30px' }} {...props}>
        {children}
      </Text>
    </Box>
  )
}

export default PostTitle
