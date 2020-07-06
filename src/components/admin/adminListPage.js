import React from 'react'
import {
  Box,
  Heading
} from '@chakra-ui/core'
const adminList = ({ children, title, ...props }) => {
  return (
    <>
      <Box as='article' px='5%' {...props}>
        <Heading as='h3' fontSize={{ base: '15px', sm: '1rem' }} mt={10} mb={4}>{title}</Heading>
        {children}
      </Box>
    </>
  )
}
export default adminList
