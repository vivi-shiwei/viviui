import React from 'react'
import { Box } from '@chakra-ui/core'

import { TableContext } from './tableContext'

// 从它的父级决定它是th还是td
const TableCell = (props) => {
  // 从组件 context 里取值
  const { parent } = React.useContext(TableContext)
  // 使用三元表达式判断它是否等于 TableHead， 再去赋值。
  const Component = (parent === 'TableHead' ? 'th' : 'td')
  return (
    <Box
      as={Component}
      border='1px #CBD5E0 solid'
      // wordBreak='break-word'
      {...props}
    />
  )
}
export default TableCell
