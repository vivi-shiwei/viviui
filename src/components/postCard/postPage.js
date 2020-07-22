import React from 'react'
import {
  Box
} from '@chakra-ui/core'
export const PostPage = props => (
  <Box
    rounded={{ base: 0, md: 6 }}
    mx='auto'
    border='1px solid #b7b7b7'
    width={{ base: '100%', md: '655px' }}
    p={4}
    {...props}
  />
)
