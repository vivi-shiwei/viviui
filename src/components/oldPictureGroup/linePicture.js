import React from 'react'
import {
  Box
} from '@chakra-ui/core'

const LinePicture = (props) => {
  return (
    <Box as='div' className={`grid-images ${props.className}`} mt={2}>
      {props.children}
    </Box>
  )
}

export default LinePicture
