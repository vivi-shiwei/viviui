import React from 'react'
import {
  Box
} from '@chakra-ui/core'

// 只裝三個
const OtherContent = (props) => {
  return (
    <Box {...props}>
      <Box as='div' className={`grid-images ${props.className}`} mt={2}>
        {props.children}
      </Box>
    </Box>
  )
}
export default OtherContent
