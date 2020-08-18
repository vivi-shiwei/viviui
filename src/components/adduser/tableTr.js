import React, { useContext } from 'react'
import { Box } from '@chakra-ui/core'
import { TableContext } from './tableContext'

const TableTr = ({ children, ...props }) => {
  const { parent } = useContext(TableContext)
  return (
    <Box
      as='tr'
      h='40px'
      fontSize={{ base: '12px', sm: '12px', md: '16px' }}
      {...props}
    >
      <TableContext.Provider value={{ parent: parent }}>
        {children}
      </TableContext.Provider>
    </Box>
  )
}

export default TableTr
