import React from 'react'
import { Box } from '@chakra-ui/core'
import HeaderContainer from '../container'
const SelectorPage = ({ topAdmin, leftSelectPage, centerSelectPage, rightSelectPage, children, ...props }) => {
  return (
    <Box as='main' {...props}>
      <HeaderContainer>
        {topAdmin}
        <Box display='flex' justifyContent='center' m='auto' mt='10px'>
          {leftSelectPage}
          {centerSelectPage}
          {rightSelectPage}
        </Box>
      </HeaderContainer>
    </Box>
  )
}

export default SelectorPage
