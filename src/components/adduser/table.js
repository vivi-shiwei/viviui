import React, { memo } from 'react'
import {
  Box
} from '@chakra-ui/core'

const Table = (props) => {
  return (
    <Box
      as='table'
      w='100%'
      mt={{ base: '4', sm: '4', md: '7' }}
      letterSpacing='0.05rem'
      {...props}
    />
  )
}

export default memo(Table)
