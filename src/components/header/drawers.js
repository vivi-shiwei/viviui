import React from 'react'
import {
  Box,
  Flex
} from '@chakra-ui/core'

const HeaderLeft = ({ headerCenter, text, children, ...props }) => {
  return (
    <Box alignItems='center'>
      {headerCenter}
    </Box>
  )
}
export default HeaderLeft
