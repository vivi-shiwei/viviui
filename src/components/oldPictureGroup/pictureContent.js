import React from 'react'
import {
  Box
} from '@chakra-ui/core'

// 只裝三個
const PictureContent = ({ children, ...props }) => {
  return (
    <Box as='div' className={`grid-images ${props.className}`} mt={2}>
      {props.children}
    </Box>
  )
}

export default PictureContent
