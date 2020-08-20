import React from 'react'
import {
  Box
} from '@chakra-ui/core'
import { FaUserTag } from 'react-icons/fa'

const PostTags = ({ children, ...props }) => {
  const count = children.length
  return (
    <Box mt={3} d='flex' alignItems='center' flexWrap='wrap' {...props}>
      <Box as={FaUserTag} fontSize='20px' w='20px' mr={2} />
      {children.map((item, index) => {
        const name = item.props.children
        const name2 = name.concat('、')
        if (count !== index + 1) {
          return name2
        } else {
          return name
        }
      })}
    </Box>
  )
}

export default PostTags
