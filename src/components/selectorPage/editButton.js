import React from 'react'
import { IconButton } from '@chakra-ui/core'

const EditIcon = (...props) => {
  return (
    <IconButton
      as='div'
      icon='edit'
      {...props}
    />
  )
}

export default EditIcon
