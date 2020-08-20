import React from 'react'
import {
  Box,
  Link,
  Text
} from '@chakra-ui/core'
import { FaUserTag } from 'react-icons/fa'

const PostTags = ({ children, ...props }) => {
  const count = children.length
  return (
    <Box mt={3} d='flex' alignItems='center' flexWrap='wrap' {...props}>
      <Box as={FaUserTag} fontSize='20px' w='20px' mr={2} />
      {children.map((item, index) => {
        if (children.length !== index + 1) {
          return <Text as='span'>{item}、</Text>
        } else {
          return <Text as='span'>{item}</Text> // 标注最后一个不加点
        }
      })}
    </Box>
  )
}

export default PostTags
