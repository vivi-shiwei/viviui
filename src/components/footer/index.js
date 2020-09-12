import React from 'react'
import {
  Box,
  Divider
} from '@chakra-ui/core'

import Container from '../container'

const Footer = ({ title, context, sign, noDivider = false, children, ...props }) => {
  return (
    <>
      {!noDivider && (<Divider mt={24} mb={6} />)}
      <Container mb={{ base: 4, md: 20 }} px={4} {...props}>
        <Box as='footer'>
          {children}
        </Box>
      </Container>
    </>
  )
}

export default Footer
