import React from 'react'
import { Box } from '@chakra-ui/core'
import { Container } from '../containerPage'
const SelectorPage = ({ topAdmin, leftSelectPage, centerSelectPage, rightSelectPage, children, ...props }) => {
  return (
    <Box as='main' {...props}>
      <Container>
        {topAdmin}
        <Box display='flex' justifyContent='center' m='auto' mt='10px'>
          {leftSelectPage}
          {centerSelectPage}
          {rightSelectPage}
        </Box>
      </Container>
    </Box>
  )
}

export default SelectorPage
