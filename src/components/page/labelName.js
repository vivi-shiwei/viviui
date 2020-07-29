import React from 'react'
import {
  Box,
  Divider,
  FormLabel
} from '@chakra-ui/core'

const WhiteBoard = ({ title, backurl, label, nodivider = false, children, ...props }) => {
  return (
    <Box as='div' d={{ base: 'block', sm: 'flex' }}>
      <FormLabel>{label}</FormLabel>
      <Box as='div' />
      {/* {schooluser.name} */}
    </Box>
  )
}

export default WhiteBoard
