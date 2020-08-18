import React, { Children } from 'react'
import {
  Box,
  PseudoBox
} from '@chakra-ui/core'

import EditTable from './editTable'
import DeleteIcon from './deleteIcon'
import CancelButton from './cancelButton'
import ConfirmButton from './confirmButton'

const EditIntelligence = ({ left, onChage, children, ...props }) => {
  const editTable = []
  let deleteIco = null
  let cancel = null
  let confirm = null
  const right = []

  // 把 children 里的标签拿出来后赋值。
  Children.map(children, (c, i) => {
    switch (c.type) {
      case EditTable:
        editTable.push(c)
        break
      case DeleteIcon:
        deleteIco = c
        break
      case CancelButton:
        cancel = c
        break
      case ConfirmButton:
        confirm = c
        break
      default:
        right.push(c)
    }
  })
  return (
    <PseudoBox
      d={{ base: 'block', sm: 'flex' }}
      p={2}
      alignItems='center'
      justifyContent='space-between'
      _hover={{ bg: 'blue.100', color: 'black' }}
      {...props}
    >
      <Box d='flex' justifyContent='space-between' width={{ base: '90%', sm: '64%' }} mx={{ base: 'auto', sm: 'none' }}>
        <Box ml={{ base: 0, sm: 3 }}>
          {editTable}
        </Box>
        <Box my='auto'>
          {deleteIco}
        </Box>
      </Box>
      <Box
        width={{ base: '90%', sm: '30%' }}
        mx={{ base: 'auto', sm: 'none' }}
        display='flex'
        alignItems='center'
        justifyContent={{ base: 'space-between', sm: 'space-around' }}
      >
        {cancel}
        {confirm}
        {right}
      </Box>
    </PseudoBox>
  )
}
export default EditIntelligence
