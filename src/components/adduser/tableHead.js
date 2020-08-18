import React from 'react'

import { TableContext } from './tableContext'

const TableHead = ({ children }) => {
  return (
    <thead>
      <TableContext.Provider value={{ parent: 'TableHead' }}>
        {children}
      </TableContext.Provider>
    </thead>
  )
}

export default TableHead
