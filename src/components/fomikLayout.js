import React from 'react'
import {
  Box
} from '@chakra-ui/core'

const FormikLayout = ({ children, ...props }) => {
  return (
    <Box as='article' px={{ base: 8, sm: 8, md: 16 }} pb={16} {...props}>
      {children}
    </Box>
  )
}
export default FormikLayout
