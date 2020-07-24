import React from 'react'
import {
  Box
} from '@chakra-ui/core'

const PhotosGrid = ({ children, ...props }) => {
  return (
    <Box w='full' {...props}>
      {children}
    </Box>
  )
}

export default PhotosGrid
