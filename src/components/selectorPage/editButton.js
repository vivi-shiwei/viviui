import React from 'react'
import { IconButton, Box } from '@chakra-ui/core'
const EditIcon = ({ isAdmin, left, dashboards, right, children, ...props }) => {
  return (
    <Box {...props}>
      <IconButton
        icon='edit'
        variant='outline'
      />
      {children}
    </Box>
  )
}

export default EditIcon
