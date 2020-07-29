import React from 'react'
import {
  Box,
  Heading,
  Divider
} from '@chakra-ui/core'

const HeaderPage = ({ title, content, children, ...props }) => {
  return (
    <Box border='1px solid #FED7D7' background='#FFF5F5' rounded={4} mt={20} p={5} {...props}>
      <Box>
        <Heading as='h4' size='md'>
          {title}
        </Heading>
        <Box mt={4}>{content}</Box>
      </Box>
      <Divider />
      <Box
        textAlign='right'
        pr={3}
        pt={8}
      >
        {children}
      </Box>

    </Box>
  )
}

export default HeaderPage
