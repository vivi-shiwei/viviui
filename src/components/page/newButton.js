import React from 'react'
import { Button } from '@chakra-ui/core'

const newButton = (props) => {
  return (
    <Button variantColor='blue' rounded='999px' mt={2} {...props} />
  )
}

export default newButton