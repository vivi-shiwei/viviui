import React from 'react'
import { Box } from '@chakra-ui/core'

import { TableContext } from './tableContext'

const TableCell = ({ children, ...props }) => {
  const { parent } = React.useContext(TableContext)
  const Component = (parent === 'TableHead' ? 'th' : 'td')
  return (
    <Box
      as={Component}
      border='1px #CBD5E0 solid'
      wordBreak='break-word'
      {...props}
    >
      {children}
    </Box>
  )
}
export default TableCell
