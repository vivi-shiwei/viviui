import React from 'react'
import {
  Box,
  Heading
} from '@chakra-ui/core'

// 學校管理員的數據
const Management = ({ text, columnLine, children, descriptionProps, ...props }) => {
  return (
    <Box as='article' {...props}>
      <Heading
        as='h3'
        fontSize={{ base: '15px', sm: '1rem' }}
        mt={10}
        mb={4}
        {...descriptionProps}
      >
        {text}
      </Heading>
      {children}
      {columnLine}
    </Box>
  )
}

export default Management
