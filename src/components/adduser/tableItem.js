import React, { memo } from 'react'
import {
  Box
} from '@chakra-ui/core'

const TableItem = ({ item, index, children, ...props }) => {
  return (
    <Box
      as='tr'
      h='40px'
      fontSize={{ base: '12px', sm: '12px', md: '16px' }}
    >
      <Box as='td' border='1px #CBD5E0 solid' wordBreak='break-word' textAlign='center' width={{ base: '20%', sm: '20%' }}>{index + 1}</Box>
      <Box as='td' border='1px #CBD5E0 solid' wordBreak='break-word' textAlign='center' px={2} py={3} width={{ base: '30%', sm: '30%' }}>{item.fieldName}</Box>
      <Box as='td' border='1px #CBD5E0 solid' wordBreak='break-word' px={{ base: '1', sm: '1', md: '4' }} py={3}>{item.describe}</Box>
    </Box>
  )
}
export default memo(TableItem)
