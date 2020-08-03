import React from 'react'
import { Button } from '@chakra-ui/core'

const newButton = (props) => {
  return (
    <Button variantColor='blue' rounded='999px' width={{ base: '60%', sm: '60%', md: '30%' }} mt={2} {...props} />
  )
}

export default newButton
