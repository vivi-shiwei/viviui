import React from 'react'
import {
  Button,
  Box
} from '@chakra-ui/core'

const BlueButton = ({ leftIcon, rightIcon, children, containerProps, ...props }) => {
  return (
    <Button
      as='a'
      size='lg'
      w='100%'
      variantColor='blue'
      borderRadius='9999px'
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

export default BlueButton
