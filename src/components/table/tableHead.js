import React from 'react'
import { Box } from '@chakra-ui/core'

import { TableContext } from './tableContext'

// table 的 thead
const TableHead = ({ children, ...props }) => {
  return (
    <Box as='thead' {...props}>
      <TableContext.Provider
        value={{ parent: 'TableHead' }}// 给每一个子集都赋值
      >
        {children}
      </TableContext.Provider>
    </Box>
  )
}

export default TableHead
