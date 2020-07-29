import React from 'react'
import { Button } from '@chakra-ui/core'

const SquareButton = ({ children, ...props }) => {
  return (
    <Button
      as='div'
      fontSize={{ base: '14px', md: '16px' }}
      {...props}
    >
      {children}
    </Button>
  )
}
export default SquareButton
