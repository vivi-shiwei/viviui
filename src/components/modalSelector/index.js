import React from 'react'
import { Box } from '@chakra-ui/core'
import HeaderContainer from '../container'
const ModalSelector = ({ topAdmin, leftY, rightY, ...props }) => {
  return (
    <Box as='main' {...props}>
      <HeaderContainer>
        {topAdmin}
        <Box display='flex' justifyContent='center' m='auto' mt='10px'>
          {leftY}
          {rightY}
        </Box>
      </HeaderContainer>
    </Box>
  )
}

export default ModalSelector
