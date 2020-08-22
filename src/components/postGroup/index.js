import React from 'react'
import {
  Box
} from '@chakra-ui/core'

const PostGroup = ({ topLeft, topRight, postTalent, postTags, postTitle, postContent, photosGroup, children, ...props }) => {
  return (
    <Box
      rounded={{ base: 0, md: 6 }}
      mx='auto'
      border='1px solid #b7b7b7'
      p={4}
      {...props}
    >
      {children}
      <Box as='header' position='relative'>
        {topLeft}
        {topRight}
        {postTalent}
        {postTags}
        {postTitle}
      </Box>
      <Box as='article'>
        {postContent}
        {photosGroup}
      </Box>
    </Box>
  )
}

export default PostGroup
