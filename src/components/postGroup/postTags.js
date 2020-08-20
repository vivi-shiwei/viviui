import React from 'react'
import {
  Box
} from '@chakra-ui/core'
import { FaUserTag } from 'react-icons/fa'

const PostTags = ({ children, ...props }) => {
  return (
    <>
      {children.trim() && (
        <Box mt={3} d='flex' alignItems='center' flexWrap='wrap' {...props}>
          <Box as={FaUserTag} fontSize='20px' w='20px' mr={2} />
          {children}
        </Box>
      )}
    </>
  )
}

export default PostTags
