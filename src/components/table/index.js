import React, { memo } from 'react'
import {
  Box
} from '@chakra-ui/core'

// table component
const Table = (props) => {
  return (
    <Box
      as='table'
      w='99%'
      m='auto'
      letterSpacing='0.05rem'
      {...props}
    />
  )
}

export default memo(Table)
