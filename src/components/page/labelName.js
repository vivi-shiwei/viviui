import React from 'react'
import {
  Box,
  Divider,
  FormLabel,
  Text
} from '@chakra-ui/core'

const WhiteBoard = ({ title, backurl, label, name, type, nodivider = false, children, ...props }) => {
  return (
    <Box as='div' d={{ base: 'block', sm: 'flex' }} lineHeight='40px' {...props}>
      <FormLabel>{label}：</FormLabel>
      <Text>{name}</Text>
      <Text>{type}</Text>
    </Box>
  )
}

export default WhiteBoard
