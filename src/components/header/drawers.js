import React from 'react'
import {
  Box,
  Flex
} from '@chakra-ui/core'

const HeaderLeft = ({ HeaderCenter, text, children, ...props }) => {
  return (
    <Box alignItems='center'>
      {HeaderCenter}
    </Box>
  )
}
export default HeaderLeft
