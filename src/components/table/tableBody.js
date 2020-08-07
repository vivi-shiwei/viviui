import React from 'react'
import {
  Box
} from '@chakra-ui/core'

import { TableContext } from './tableContext'

// table 的 tbody
const TableBody = ({ children, ...props }) => {
  return (
    <Box as='tbody' {...props}>
      <TableContext.Provider
        value={{ parent: 'TableBody' }}// 给每一个子集都赋值
      >
        {children}
      </TableContext.Provider>
    </Box>
  )
}
export default TableBody
