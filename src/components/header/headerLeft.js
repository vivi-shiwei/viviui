import React, { memo } from 'react'
import {
  Box,
  Flex
} from '@chakra-ui/core'

const HeaderLeft = ({ logo, text, children, ...props }) => {
  return (
    <Flex
      justify='flex-start'
      ml='0'
      {...props}
    >
      <Box alignItems='center' d='flex'>
        {children}
      </Box>
    </Flex>
  )
}
export default memo(HeaderLeft)
