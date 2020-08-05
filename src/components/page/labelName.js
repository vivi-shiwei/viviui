import React from 'react'
import {
  Box,
  FormLabel,
  Text
} from '@chakra-ui/core'

// 顯示學校用戶信息的 component ，類型加名字加職業
const LabelName = ({ label, name, type, children, ...props }) => {
  return (
    <Box as='div' d='flex' lineHeight='40px' {...props}>
      <FormLabel>{label}：</FormLabel>
      <Text>{name}</Text>
      <Text>{type}</Text>
      {children}
    </Box>
  )
}

export default LabelName
