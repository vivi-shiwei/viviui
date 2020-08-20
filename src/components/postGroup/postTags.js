import React, { Children } from 'react'
import {
  Box,
  Text
} from '@chakra-ui/core'
import { FaUserTag } from 'react-icons/fa'

const PostTags = ({ children, ...props }) => {
  return (
    <>
      <Box mt={3} d='flex' alignItems='center' flexWrap='wrap' {...props}>
        <Box as={FaUserTag} fontSize='20px' w='20px' mr={2} />
        {Children.map(children, (item, index) => {
          if (children.length >= 1 && children.length !== index + 1) {
            return <Text as='span'>{item}、</Text>
          } else {
            return <Text as='span'>{item}</Text> // 标注最后一个不加点
          }
        }
        )}
      </Box>
    </>
  )
}

export default PostTags
