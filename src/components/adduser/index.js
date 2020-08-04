import React, { memo } from 'react'
import {
  Box
} from '@chakra-ui/core'

const addUser = ({ children, ...props }) => {
  return (
    <Box>
      {children}
    </Box>
  )
}

export default memo(addUser)
