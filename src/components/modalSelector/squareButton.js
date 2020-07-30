import React from 'react'
import { Button } from '@chakra-ui/core'

const SquareButton = (props) => {
  return (
    <Button
      as='div'
      fontSize={{ base: '14px', md: '16px' }}
      {...props}
    />
  )
}
export default SquareButton
