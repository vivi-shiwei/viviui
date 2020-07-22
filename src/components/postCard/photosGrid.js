import React from 'react'
import {
  Box
} from '@chakra-ui/core'

const PhotosGrid = ({ children, ...props }) => {
  return (
    <Box w='full' bg='black' h='100px'>{children}</Box>
  )
}

export default PhotosGrid
