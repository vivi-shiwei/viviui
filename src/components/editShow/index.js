import React, { Children } from 'react'
import {
  Box,
  PseudoBox
} from '@chakra-ui/core'

import EditTable from './editTable'
import DeleteIcon from './deleteIcon'
import CancelButton from './cancelButton'
import ConfirmButton from './confirmButton'

const EditIntelligence = ({ left, children, ...props }) => {
  const editTable = []
  let deleteIco = null
  let cancel = null
  let confirm = null

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
    }
  })
  return (
    <PseudoBox
      d={{ base: 'block', sm: 'flex' }}
      alignItems='center'
      justifyContent='space-between'
      _hover={{ bg: 'blue.100', color: 'black' }}
      {...props}
    >
      <Box ml={{ base: 2, sm: 3, md: 5 }} width={{ base: '94%', sm: '60%' }}>
        {editTable}
        {left}
      </Box>
      <Box
        width={{ base: '100%', sm: '30%' }}
        display='flex'
        alignItems='center'
        justifyContent='space-around'
        mr={{ base: 2, sm: 3, md: 5 }}
      >
        <Box
          maxW={{ base: '70%', md: '45%' }}
          display='flex'
          alignItems='center'
          justifyContent='between'
        >
          {cancel}
          {confirm}
        </Box>
        {deleteIco}
      </Box>
    </PseudoBox>
  )
}
export default EditIntelligence
