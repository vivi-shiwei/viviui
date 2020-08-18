import React from 'react'
import {
  Button,
  Box
} from '@chakra-ui/core'

const RedButton = ({ leftIcon, rightIcon, children, ...props }) => {
  return (
    <Button
      as='div'
      size='lg'
      bg='#E53E3E'
      w={{ base: '100%', sm: '340px' }}
      variant='solid'
      borderRadius='9999px'
      color='#fff'
      _hover={{
        background: '#C53030'
      }}
      _active={{
        background: '#9B2C2C'
      }}
      {...props}
    >
      {leftIcon}
      <Box
        d='flex'
        flex='1 0 auto'
        justifyContent='center'
        mt='-1px'
        ml='8px'
      >
        {children}
      </Box>
      {rightIcon}
    </Button>
  )
}

export default RedButton
