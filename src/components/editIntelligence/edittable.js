import React from 'react'
import {
  Box,
  EditablePreview,
  EditableInput
} from '@chakra-ui/core'

const Edittable = ({ ...props }) => {
  return (
    <Box
      maxW={{ base: '100px', sm: '100px', md: '300px' }}
      p='5px 10px'
      whiteSpace='nowrap'
      overflow='hidden'
      textOverflow='ellipsis'
      {...props}
    >
      <EditablePreview as='flex' alignItems='center' justifyContent='space-between' />
      <EditableInput />
    </Box>
  )
}
export default Edittable
