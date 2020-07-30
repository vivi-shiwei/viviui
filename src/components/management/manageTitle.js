import React from 'react'
import { Box } from '@chakra-ui/core'
const ManageTitle = ({ children, ...props }) => {
  return (
    <Box pt='1px'>
      <Box
        as='section'
        mx='auto'
        w='100%'
        maxW={{ base: '100%', sm: '100%', md: '800px' }}
        backgroundColor='white'
        rounded={8}
        transition='0.3s'
        textAlign='center'
        fontSize='24px'
        fontWeight='bold'
      >
        {children}
      </Box>
    </Box>
  )
}

export default ManageTitle
