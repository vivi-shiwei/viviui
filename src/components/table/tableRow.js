import React from 'react'
import { Box } from '@chakra-ui/core'

// 包装th或者td，让他们不会换行的 tr 标签
const TableRow = (props) => {
  return (
    <Box
      as='tr'
      {...props}
    />
  )
}

export default TableRow
