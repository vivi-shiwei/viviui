import React from 'react'
import {
  Box,
  FormLabel,
  Text
} from '@chakra-ui/core'

// 顯示學校用戶信息的 component ，類型加名字加職業
const LabelName = ({ title, label, name, type, children, ...props }) => {
  return (
    <Box as='div' d={{ base: 'block', sm: 'flex' }} lineHeight='40px' {...props}>
      <FormLabel>{label}：</FormLabel>
      <Text>{name}</Text>
      <Text>{type}</Text>
      {children}
    </Box>
  )
}

export default LabelName
