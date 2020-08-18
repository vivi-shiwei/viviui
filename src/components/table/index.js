import React, { memo } from 'react'
import {
  Box
} from '@chakra-ui/core'

// table component
const Table = ({ children, ...props }) => {
  return (
    <Box
      as='table'
      w='99%'
      m='auto'
      letterSpacing='0.05rem'
      className='table'
      {...props}
    >
      {children}
      <style>
        {
          `
          .table tbody tr:nth-child(odd) td{
            background-color: #ddd;
          }
        `
        }
      </style>
    </Box>
  )
}

export default memo(Table)
