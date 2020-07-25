import React from 'react'
import { IconButton } from '@chakra-ui/core'
const EditIcon = ({ isAdmin, left, dashboards, right, children, ...props }) => {
  return (
    <IconButton
      as='div'
      icon='edit'
      {...props}
    />
  )
}

export default EditIcon
