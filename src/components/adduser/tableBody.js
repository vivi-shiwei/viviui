import React from 'react'

import { TableContext } from './tableContext'

const TableBody = ({ children }) => {
  return (
    <tbody>
      <TableContext.Provider value={{ parent: 'TableBody' }}>
        {children}
      </TableContext.Provider>
    </tbody>
  )
}
export default TableBody
