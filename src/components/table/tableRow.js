import React, { useContext } from 'react'
import { Box } from '@chakra-ui/core'

import { TableContext } from './tableContext'

// 包装th或者td，让他们不会换行的tr标签
const TableRow = ({ children, ...props }) => {
  // 从 Context 里取出 parent 的值
  const { parent } = useContext(TableContext)
  return (
    <Box
      as='tr'
      h='40px'
      // fontSize={{ base: '12px', sm: '12px', md: '16px' }}
      {...props}
    >
      <TableContext.Provider
        value={{ parent: parent }}// 使用它并去赋值。
      >
        {children}
      </TableContext.Provider>
    </Box>
  )
}

export default TableRow
